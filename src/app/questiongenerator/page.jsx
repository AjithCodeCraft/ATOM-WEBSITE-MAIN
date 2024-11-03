"use client"
import { useState } from 'react';
import PDFGenerator from '../components/PDFGenerator';
import Header from '../components/Header';

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [marks, setMarks] = useState(10);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pdfGenerator = new PDFGenerator();
        await pdfGenerator.generatePDF(question, marks);
        pdfGenerator.downloadPDF();
    };

    return (
        <main className='flex flex-col gap-0 max-w-screen-xl mx-auto min-h-screen justify-center'>
            <Header />
            <form onSubmit={handleSubmit} className='w-full lg:px-[10rem] sm:px-[7rem] px-4 flex gap-3 flex-col my-auto'>
                <div className='bg-white/40 shadow-lg ring-1 ring-black/5 p-8 rounded-2xl'>
                    <div className='w-full flex justify-end'>
                        <div className='max-w-sm flex flex-row gap-4 items-center'>
                            <label className='block text-sm font-medium text-gray-900'>Marks:</label>
                            <select value={marks} onChange={(e) => setMarks(e.target.value)} className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-base font-medium text-gray-900">Question</label>
                        <div className="mt-2.5 relative">
                            <textarea
                                name=""
                                id=""
                                placeholder=""
                                type="text"
                                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                rows="10"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        <button
                            type='submit'
                            whileHover={{ scale: 1.1, backgroundColor: '#4f46e5', boxShadow: 'inset 0 0 0 2px #2F2F30', color: 'white' }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-[#4f46e5] text-white md:text-lg text-xs rounded-full py-3 md:px-9 px-5 transition-all duration-300 border border-[#2F2F30]"
                        >
                            Generate PDF
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default QuestionForm;
