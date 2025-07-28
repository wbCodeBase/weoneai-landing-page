"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
// import { createLinkedContent } from '#/utils/LinkBuilder';



const faqData = {


    "software-development-company-in-india": [
        {
            "id": "default-1",
            "question": "Is reselling an app is legal?",
            "answer": {
                "type": "text",
                "content": "Yes, it is! This is known as white label software and it is one of the most profitable business models in today’s digital market."
            }
        },
        {
            "id": "default-2",
            "question": "Are you the authors of SocialPoster?",
            "answer": {
                "type": "text",
                "content": "No, we are not the authors of SocialsPoster. However, we own all the rights to commercialize it, and have added over 40 exclusive enhancements to the original app, including cutting-edge AI add-ons, ChatGPT chatbots, and more."
            }
        },
        {
            "id": "default-3",
            "question": "How can I offer value if other resellers sell this same platform?",
            "answer": {
                "type": "text",
                "content": "No worries! You can make the platform truly your own by customizing it with your unique logo, colors, language and landing page. Plus, you have the freedom to create special packages, set your own prices, and offer extra perks like better costs, extended trials, or additional services such as technical support and AI training. The possibilities are endless—get creative and make your offer stand out!"
            }
        },
        {
            "id": "default-4",
            "question": "Are there any hidden expenses?",
            "answer": {
                "type": "text",
                "content": "No. However, you will need to consider some additional investments to make your new platform functional."
            }
        },
       
    ],


};



const Faqs = () => {

    const data = faqData["software-development-company-in-india"];

    return (
        <section id="faqs" className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">
            <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">
                <div className="lg:w-[30%] w-full">
                    {/* <h2 className="font-semibold text-orange-500 text-xl">FAQs</h2> */}
                    <h2 className="font-semibold text-3xl md:text-4xl my-2">Ask what you want</h2>
                    <p className="text-lg text-gray-700">
                        Whether you require a complex enterprise software solution or
                        seamless software integration.
                    </p>
                </div>

                <div className="lg:w-[62%] w-full py-2">
                    <Accordion type="single" collapsible className="w-full">
                        {data.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="text-[17px] text-left text-gray-700 cursor-pointer hover:no-underline">
                                    {faq.question || "No question available"}
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px] text-gray-600 my-6">

                                    {faq.answer?.type === "text" && faq.answer?.content && (
                                        <p>{faq?.answer?.content}</p>
                                    )}

                                    {faq.answer?.type === "paragraph" && Array.isArray(faq.answer.content) && (
                                        <>
                                            {faq.answer.headPara && (
                                                <p className="mb-3">{faq.answer.headPara}</p>
                                            )}

                                            {faq.answer.content.map((item, index) => (
                                                <div key={index} className="mb-4 flex">
                                                    {item.para && item.title && <p> <strong>{item.title}:</strong> {item.para}</p>}
                                                </div>
                                            ))}

                                        </>


                                    )}

                                    {faq.answer?.type === "list" && (
                                        <>
                                            {/* Optional paragraph before the list */}
                                            {faq.answer.para && (
                                                <p className="mb-3">{faq.answer.para}</p>
                                            )}
                                            {/* List content */}
                                            {Array.isArray(faq.answer.content) && (
                                                <ul className='list-disc mt-6 list-inside space-y-2'>
                                                    {faq.answer.content.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}

                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </section>
    );
};

export default Faqs;
