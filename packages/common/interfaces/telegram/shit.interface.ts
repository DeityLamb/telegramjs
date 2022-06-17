// Type definitions for node-telegram-bot-api 0.57
// Project: https://github.com/yagop/node-telegram-bot-api
// Definitions by: Alex Muench <https://github.com/ammuench>
//                 Agadar <https://github.com/agadar>
//                 Giorgio Garasto <https://github.com/Dabolus>
//                 XC-Zhang <https://github.com/XC-Zhang>
//                 AdityaThebe <https://github.com/adityathebe>
//                 Michael Orlov <https://github.com/MiklerGM>
//                 XieJiSS <https://github.com/XieJiSS>
//                 Toniop <https://github.com/toniop99>
//                 Konstantin24121 <https://github.com/konstantin24121>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/// TELEGRAM TYPES ///


interface InputTextMessageContent {
  message_text: string;
  parse_mode?: ParseMode;
  disable_web_page_preview?: boolean;
}

interface InputLocationMessageContent {
  latitude: number;
  longitude: number;
}

interface InputVenueMessageContent  {
  title: string;
  address: string;
  foursquare_id?: string;
}

interface InputContactMessageContent  {
  phone_number: string;
  first_name: string;
  last_name?: string;
}



interface ResponseParameters {
  migrate_to_chat_id?: number;
  retry_after?: number;
}

interface LabeledPrice {
  label: string;
  amount: number;
}

interface ShippingOption {
  id: string;
  title: string;
  prices: LabeledPrice[];
}

interface GameHighScore {
  position: number;
  user: User;
  score: number;
}

interface Metadata {
  type?: MessageType;
}

interface BotCommand {
  command: string;
  description: string;
}

interface MessageId {
  message_id: number;
}

interface SentWebAppMessage {
  inline_message_id?: string;
}
