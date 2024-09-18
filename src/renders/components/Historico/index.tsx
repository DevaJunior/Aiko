import React, { useEffect, useState } from 'react';

import equipmentStateData from '../../../data/equipmentState.json';
import equipmentStateHistoryData from '../../../data/equipmentStateHistory.json';

interface HistoricoProps {
  equipmentId: string;
}

const Historico: React.FC<HistoricoProps> = ({ equipmentId }) => {
  const [history, setHistory] = useState<{ date: string, state: string }[]>([]);

  useEffect(() => {
    const stateHistory = equipmentStateHistoryData.find(
      (history) => history.equipmentId === equipmentId
    );

    if (stateHistory) {
      const stateHistoryFormatted = stateHistory.states.map((stateEntry) => {
        const state = equipmentStateData.find((s) => s.id === stateEntry.equipmentStateId);
        return {
          date: stateEntry.date,
          state: state?.name || 'Desconhecido',
        };
      });
      setHistory(stateHistoryFormatted);
    }
  }, [equipmentId]);

  return (
    <div>
      <h2>Histórico de Estados</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.state}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;
