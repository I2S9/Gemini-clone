import { createContext } from "react"
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = userState("");
    const [recentPrompt, setRecentPrompt] = userState("");
    const [prevPrompts,setPrevPrompts] = userState([]);
    const [showResult, serShowResult] = useState(false);
    const [loading, setLoading] = userState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {
        await runChat(prompt)
    }

    const contextValue = {
    }
    return (
        <Context.Provider value={contextValue}>
           {props.children}
        </Context.Provider> 
    )
}
export default ContextProvider;