import './styles.css';
import React, { useEffect, useState } from 'react';

import equipmentStateData from '../../../data/equipmentState.json';
import equipmentStateHistoryData from '../../../data/equipmentStateHistory.json';

interface PopupEquipamentoProps {
  id: string;
  onEstadoChange?: (estado: string) => void;
}

const PopupEquipamento: React.FC<PopupEquipamentoProps> = ({ id, onEstadoChange }) => {
  const [estado, setEstado] = useState<string>('');
  const [cor, setCor] = useState<string>('');
  const [showHistorico, setShowHistorico] = useState<boolean>(false);
  const [historico, setHistorico] = useState<{ ordem: number, estado: string }[]>([]);

  useEffect(() => {
    const stateHistory = equipmentStateHistoryData.find(
      (history) => history.equipmentId === id
    );

    if (stateHistory) {
      const recentStateId = stateHistory.states.slice(-1)[0].equipmentStateId;
      const currentStateData = equipmentStateData.find(
        (state) => state.id === recentStateId
      );

      if (currentStateData) {
        setEstado(currentStateData.name);
        setCor(currentStateData.color);

        if (onEstadoChange) {
          onEstadoChange(currentStateData.name);
        }

        // Histórico de estados com ordem caso necessario apresenta a ordem de estados do equiamento
        const historicoDeEstados = stateHistory.states.map((stateId, index) => {
          const stateData = equipmentStateData.find(state => state.id === stateId.equipmentStateId);
          return {
            ordem: index + 1,
            estado: stateData ? stateData.name : 'Desconhecido',
          };
        });
        setHistorico(historicoDeEstados);
      }
    }
  }, [id, onEstadoChange]);

  const handleButtonClick = () => {
    setShowHistorico(prev => !prev);
  };

  return (
    <div className="popup-content">
      <h4>Estado Atual</h4>
      <p style={{ color: cor }}>{estado}</p>
      <button onClick={handleButtonClick}>
        {showHistorico ? 'Ocultar Histórico de Estados' : 'Ver Histórico de Estados'}
      </button>
      {showHistorico && (
        <div className="historico-container">
          {historico.map(({ ordem, estado }, index) => (
            <div key={index} className="historico-item">
            {estado}
            {/* {`${ordem}º`}<br />{estado} */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopupEquipamento;
