// [key: keyof ChatPermissions] = 1 << n
// order is not important

export enum ChatPermissionsBitfields {
  CAN_SEND_MESSAGES         = 1 << 1,
  CAN_SEND_MEDIA_MESSAGES   = 1 << 2,
  CAN_SEND_POLLS            = 1 << 3,
  CAN_SEND_OTHER_MESSAGES   = 1 << 4,
  CAN_ADD_WEB_PAGE_PREVIEWS = 1 << 5,
  CAN_CHANGE_INFO           = 1 << 6,
  CAN_INVITE_USERS          = 1 << 7,
  CAN_PIN_MESSAGES          = 1 << 8
}
