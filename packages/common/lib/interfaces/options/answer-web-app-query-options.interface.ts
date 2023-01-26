import { InlineQueryResult } from '../types/inline-query-result.interface';

/**
 * Use this method to set the result of an interaction with a Web App and send a
 * corresponding message on behalf of the user to the chat from which the query
 * originated. On success, a SentWebAppMessage object is returned.
 * @see {@link https://core.telegram.org/bots/api#answerwebappquery}
 */
export interface AnswerWebAppQueryOptions {
  /**
   * Unique identifier for the query to be answered
   */
  webAppQueryId: string;

  /**
   * A JSON-serialized object describing the message to be sent
   */
  result: InlineQueryResult;
}
