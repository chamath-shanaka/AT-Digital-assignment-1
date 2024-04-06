import { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
      answer:
        `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam sed 
        accusantium sequi a! Eveniet quod dicta aliquam repellat, soluta iure! 
        Iusto nemo debitis explicabo vitae incidunt asperiores? Nemo, illum eos.`
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
      answer:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa harum quidem
        veniam consequatur, facere reprehenderit itaque et, voluptatem, beatae incidunt. 
        Dolor quos doloremque quis velit unde voluptate, quaerat vitae?`
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
      answer:
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit debitis, 
        enim ducimus modi id inventore. Aut eligendi perspiciatis incidunt dolores 
        laboriosam quae ad explicabo soluta impedit, animi sapiente beatae quo.`
    }
  ];

  return(
    <div className="w-full max-w-896 mx-auto">

      <h2 className="text-2xl font-semibold mb-6 mt-28 font-Poppins  text-blueishPurple text-center">
        Frequently asked questions
      </h2>

      {faqData.map((faq, index) => (
        <div
          key={index}
          className={"bg-lightBlueishPurple my-4 mx-7"}
        >
          <button
            className="w-full px-4 py-3 text-left"
            onClick={() => toggleFaq(index)}
          >
            <span className={`flex justify-between ${activeIndex === index ? "text-blueishPurple" : "text-black"}`}>
              <h3 className="inline-block text-xl font-medium">
                {faq.question}
              </h3>
              <h3 className="inline-block text-2xl font-medium">
                {activeIndex === index ? "-" : "+"}
              </h3>
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-4 pb-4 text-gray-800">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}