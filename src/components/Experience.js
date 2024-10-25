function Experience() {
    const experiences = [
        {
            company: "Saevah LLC",
            role: "Operations Associate",
            period: "2023 - 2024 (1 year)",
            description: " Outlook · Freshdesk · Zendesk · Microsoft Excel · Microsoft Office · Data Analysis · Data Entry · Data Mining · Data Analytics · Data Collection · Microsoft Word · Google Sheets · Google Slides ."
        },

        {
            company: "Arcgate",
            role: "Research Analyst",
            period: "March 2022 - November 2022 (9 months)",
            description: "AData Analysis · Data Entry · Data Mining · Data Analytics · Data Collection · Microsoft Word · Google Sheets · Google Slides · Microsoft Excel · Microsoft Office."
        },
        {
            company: "Fusion Business Solutions Pvt. Ltd.",
            role: "Associate",
            period: "January 2020 - June 2021 (1 year 8 months)",
            description: "Client Relations · Client Services · Client handling · Data Analysis · Microsoft Outlook · Microsoft Excel · Internet Surfing."
        },


    ];

    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-gray-800 mt-10 mb-4">Work Experience</h2>
            <div className="max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                    <div key={index} className="flex mb-10">
                        <div className="w-1/4 text-right pr-8">
                            <p className="text-lg font-semibold text-gray-700">{exp.period}</p>
                        </div>
                        <div className="w-3/4 pl-8 border-l-2 border-gray-300">
                            <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                            <p className="text-gray-600 italic mb-2">{exp.company}</p>
                            <p className="text-gray-600">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
