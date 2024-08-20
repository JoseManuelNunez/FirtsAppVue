import { sleep } from "@/helpers/sleep"
import type { YesNoResponse } from "@/interfaces/Yes-no.response"
import type { ChatMessage } from "@/interfaces/chat-message.interface"
import { ref } from "vue"

export const useChat = () => {

    const messages = ref<ChatMessage[]>([])

    const getHerResponse = async () => {
        const res = await fetch("https://yesno.wtf/api");
        const data = (await res.json()) as YesNoResponse

        return data
    }

    const onMessage = async (text: string) => {

        if (text.length === 0) return;

        messages.value.push({
            id: new Date().getDate(),
            itsMine: true,
            message: text
        })

        if (!text.endsWith('?')) return

        
        
        const { answer, image } = await getHerResponse()
        await sleep(1.5)

        messages.value.push({
            id: new Date().getDate(),
            itsMine: false,
            message: answer,
            image: image
        })

    }

    return {
        // Properties
        messages,

        // Methods
        onMessage,
    }
}