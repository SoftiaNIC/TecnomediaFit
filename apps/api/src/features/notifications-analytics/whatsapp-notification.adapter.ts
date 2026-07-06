export interface WhatsAppNotificationPayload {
  recipientPhone: string;
  message: string;
}

export interface WhatsAppNotificationAdapter {
  prepare(payload: WhatsAppNotificationPayload): Promise<{ provider: "local"; status: "prepared" }>;
}

export class LocalWhatsAppNotificationAdapter implements WhatsAppNotificationAdapter {
  async prepare(_payload: WhatsAppNotificationPayload): Promise<{ provider: "local"; status: "prepared" }> {
    return { provider: "local", status: "prepared" };
  }
}
