import {
    useMultiChatLogic,
    MultiChatSocket,
    MultiChatWindow,
} from "react-chat-engine-advanced";
import StandardMessageForm from "./customMessage/StandarMessageForm"

import Header from "../Header"
const Chat = () => {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testuser",
        "hola1234"
    )


    return (

        <div style={{ flexBasis: "100%" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: "100vh" }}
                renderChatHeader={(chat) => <Header chat={chat} />}
                renderMessageForm={(props) => {
                    return (
                        <StandardMessageForm props={props} active />
                    )
                }} />
        </div>

    )
}

export default Chat
