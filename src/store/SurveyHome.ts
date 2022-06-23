import { SurveyStartType } from './../types/SurveyType';
import { autobind } from "core-decorators";
import { action } from "mobx";
import SurveyRepository from '../repositories/SurveyRepository';

@autobind
class SurveyHomeStore {
  @action
  handleSurveyStart = async (request: SurveyStartType) => {
    const response: any = await SurveyRepository.handleStartSurvey(request);
    return response;
  }
}

export default SurveyHomeStore;