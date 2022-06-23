import axios from "axios";
import { SurveyStartType } from "../types/SurveyType";

class SurveyRepository {
  handleStartSurvey = async (request: SurveyStartType) => {
    try {
      const { data }: any = await axios.post(``, request);
      return data;
    } catch (err) {
      throw (err);
    }
  }

  handleGetCnt = async () => {
    try {
      const { data }: any = await axios.get(``);
      return data;
    } catch (err) {
      throw (err);
    }
  }
}

export default new SurveyRepository();