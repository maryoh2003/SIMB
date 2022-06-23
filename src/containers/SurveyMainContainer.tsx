import React from 'react';
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import SurveyMain from "../components/SurveyMain";
import { useState } from 'react';
import SurveyRepository from '../repositories/SurveyRepository';

const SurveyMainContainer = observer(() => {
  const [cnt, setCnt] = useState(0);

  const requestCnt = useCallback(async () => {
    try {
      setCnt(await SurveyRepository.handleGetCnt());
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <SurveyMain cnt={cnt} />
});

export default SurveyMainContainer;