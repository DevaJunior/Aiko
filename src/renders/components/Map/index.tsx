import React, { useEffect, useState } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import EquipmentPopup from '../PopupEquipamento';

import equipmentData from '../../../data/equipment.json';
import positionHistoryData from '../../../data/equipmentPositionHistory.json';
import equipmentStateData from '../../../data/equipmentState.json';
import equipmentStateHistoryData from '../../../data/equipmentStateHistory.json';

import imgOperador from '../../../img/icons/icn_operador.png';
import imgManutencao from '../../../img/icons/icon_manutencao.png';
import imgParada from '../../../img/icons/icn_parado.png';
import imgDefault from '../../../img/icons/icn_atencao.png';

interface Equipamento {
  id: string;
  name: string;
  lat: number;
  lon: number;
  estado: string;
}

const Map: React.FC = () => {
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);

  useEffect(() => {
    const fetchEquipmentData = () => {
      const equipmentWithPosition = equipmentData.map((item) => {
        const positionHistory = positionHistoryData.find(
          (history) => history.equipmentId === item.id
        );

        if (positionHistory) {
          const recentPosition = positionHistory.positions.slice(-1)[0];

          // Determina o estado atual do equipamento
          const stateHistory = equipmentStateHistoryData.find(
            (history) => history.equipmentId === item.id
          );

          let estadoAtual = '';
          if (stateHistory) {
            const recentStateId = stateHistory.states.slice(-1)[0].equipmentStateId;
            const currentStateData = equipmentStateData.find(
              (state) => state.id === recentStateId
            );
            estadoAtual = currentStateData ? currentStateData.name : '';
          }

          return {
            id: item.id,
            name: item.name,
            lat: recentPosition.lat,
            lon: recentPosition.lon,
            estado: estadoAtual,
          };
        }
        return null;
      }).filter(Boolean) as Equipamento[];

      setEquipamentos(equipmentWithPosition);
    };

    fetchEquipmentData();
  }, []);

  const getIcon = (estado: string) => {
    switch (estado) {
      case 'Operando':
        return new L.Icon({
          iconUrl: imgOperador as string,
          iconSize: [25, 25],
        });
      case 'Manutenção':
        return new L.Icon({
          iconUrl: imgManutencao as string,
          iconSize: [25, 25],
        });
      case 'Parado':
        return new L.Icon({
          iconUrl: imgParada as string,
          iconSize: [25, 25],
        });
      default:
        return new L.Icon({
          iconUrl: imgDefault as string,
          iconSize: [25, 25],
        });
    }
  };

  const handleEstadoChange = (id: string, estado: string) => {
    setEquipamentos((prevEquipamentos) =>
      prevEquipamentos.map((equipamento) =>
        equipamento.id === id ? { ...equipamento, estado } : equipamento
      )
    );
    console.log('Estado atual para equipamento', id, ':', estado);
  };

  return (
    <MapContainer center={[-19.126536, -45.947756]} zoom={6} style={{ height: '600px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {equipamentos.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.lon]}
          icon={getIcon(item.estado)}
        >
          <Popup>
            <EquipmentPopup
              id={item.id}
              onEstadoChange={(estado) => handleEstadoChange(item.id, estado)}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
