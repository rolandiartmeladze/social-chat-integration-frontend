const OpenConversation = async ({ activeConvId }: { activeConvId: string }) => {
    const Backend_Url = "https://false-vintage-flea.glitch.me";
    const response = await fetch(`${Backend_Url}/messenger/conversation/${activeConvId}`);
    const data = await response.json();
    return { data };
};
export default OpenConversation;