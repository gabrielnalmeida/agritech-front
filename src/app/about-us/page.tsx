import Image from 'next/image';

const teamMembers = [
  { name: 'Gustavo Alves', role: 'Developer', image: '/gustavo.jpg' },
  { name: 'Handel Gomes', role: 'Developer', image: '/handel.jpg' },
  { name: 'Myke Erick', role: 'Developer', image: '/myke.jpg' },
  { name: 'Yuri Garcia', role: 'Developer', image: '/yuri.jpg' },
  { name: 'Paulo Henrique', role: 'Developer', image: '/paulo.jpg' },
  { name: 'Gabriel Nunes', role: 'Developer', image: '/gabriel.jpg' },
];

export default function AboutUs() {
  return (
    <div className="bg-white text-center py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="flex justify-center">
            <img src="/plant-icon.png" alt="Plant Icon" className="h-16 mb-4" />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-green-600">About us</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            In agriculture, water is one of the biggest challenges farmers face on a daily basis, whether it's a shortage during periods of drought or an excess during floods. These problems, combined with unpredictable weather, pests and diseases, can seriously compromise the health of crops, farmers' profits and food security.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Our solution was created with the aim of simplifying farmers' lives by offering a powerful and intuitive tool. Through the exploration and analysis of data provided by NASA, we empower producers to make more informed and proactive decisions, helping them to tackle water-related problems and improve their farming practices.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Supported by accurate and up-to-date information, our platform helps farmers protect their crops, optimize water use and ensure greater sustainability and profitability, even in the face of adverse conditions. We are here to make agriculture more resilient, intelligent and connected to the future.
          </p>
        </div>
        <div className="mt-16">
          <div className="flex justify-center mb-4">
            <Image src='/teamIcon.png' alt="Team Icon" width={64} height={64} />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-green-600">Meet our team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    layout="fill" 
                    className="rounded-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}