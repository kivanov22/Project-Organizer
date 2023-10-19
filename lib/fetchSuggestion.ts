import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
    try {
        const todos = formatTodosForAI(board);


    const res = await fetch("/api/generateSummary", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ todos }),
    });

    const GPTdata = await res.json();
    const { content } = GPTdata;

    return content;
    } catch (err) {
        console.log(err);
        
    }
    
}


export default fetchSuggestion;