
export async function MessengerMessageSender(recipientId: string, text: string) {
  try {
    const response = await fetch('https://false-vintage-flea.glitch.me/messenger/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: recipientId,
        text: text,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Failed to send:', result);
    } else {
      console.log('Message sent:', result);
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
}
