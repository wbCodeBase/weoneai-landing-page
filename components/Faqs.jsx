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
            "question": "What software technologies does Bunnx use for development?",
            "answer": {
                "type": "text",
                "content": "We use a wide range of advanced software tools and technologies. And it depends on the type of software you are looking for."
            }
        },
        {
            "id": "default-2",
            "question": "What’s your pricing model?",
            "answer": {
                "type": "text",
                "content": "We have an affordable pricing model for the projects we take on. Our estimates will go well with your budget and provide you with a great value."
            }
        },
        {
            "id": "default-3",
            "question": "Do you provide end-to-end software delivery?",
            "answer": {
                "type": "text",
                "content": "Absolutely! From design and development to implementation, integration, setup, and post-deployment support – we handle it all. Our team builds only industry standard projects. With our software development services, we save your time and resources."
            }
        },
        {
            "id": "default-4",
            "question": "Will you match my timeline?",
            "answer": {
                "type": "text",
                "content": "Yes, we will! After discussing what your requirements are, we create a plan and agree on a timeline together. We always commit to delivering projects on time with minimal hurdles."
            }
        },
        {
            "id": "default-5",
            "question": "Do you provide quality software delivery?",
            "answer": {
                "type": "text",
                "content": "Quality is our top priority and we’re known for it. At every stage of development, we integrate thorough testing to catch and fix issues early. When you work with us, you can trust that quality will never be a concern."
            }
        },
        {
            "id": "default-6",
            "question": "Do you offer after-sales software development services?",
            "answer": {
                "type": "text",
                "content": "Yes, we provide support even after your project is delivered. We’re here to help with everything including updates, maintenance, or guidance."
            }
        }
    ],


};



const Faqs = () => {

    const data = faqData["software-development-company-in-india"];

    return (
        <section className="border-t border-gray-300 container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">
            <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">
                <div className="lg:w-[30%] w-full">
                    {/* <h2 className="font-semibold text-orange-500 text-xl">FAQs</h2> */}
                    <h2 className="font-semibold text-gray-700 text-3xl my-2">Ask what you want</h2>
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
