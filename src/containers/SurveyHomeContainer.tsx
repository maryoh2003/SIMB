import React from 'react';
import { observer } from 'mobx-react';
import { useCallback, useState, useSyncExternalStore } from 'react';
import SurveyHome from '../components/SurveyHome';
import SurveyRepository from '../repositories/SurveyRepository';

const SurveyHomeContainer = observer(() => {
  const [id, setId] = useState<string>('');

  const requestStart = useCallback(async () => {
    try {
      const data = {
        id,
      }
      await SurveyRepository.handleStartSurvey(data);
    } catch (err) {
      console.log(err);
    }
  }, [id])

  const handleEnter = (e: any) => {
    if (e.keyCode === 13) requestStart();
  };

  return (
    <SurveyHome id={id} setId={setId} />
  )
});

export default SurveyHomeContainer;