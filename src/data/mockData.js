export const users = [
  { id: 1, email: "contact@example.com", password: "123456", role: "contact" },
  { id: 2, email: "agent@example.com", password: "admin123", role: "agent" },
  { id: 3, email: "contact2@example.com", password: "contact2", role: "contact" },
  { id: 4, email: "contact3@example.com", password: "contact3", role: "contact" },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    adresse: "Lafran",
    age: 35,
    telephneProfissionelle: "(665)121-5454",
    telephonePortable: "(665)121-5754",
    photo: "",
    role: "contact",
    idEntreprise: 1,
    agentsFavoris: [
      { id: 2 },
      
    ],
  },
  {
    id: 3,
    name: "Jaime Lannister",
    adresse: "Lafran",
    age: 45,
    telephneProfissionelle: "(422)982-6739",
    telephonePortable: "256569874",
    photo: "",
    role: "contact",
    idEntreprise: 1,
    agentsFavoris: [
      { id: 2 },
      ],

  },
  {
    id: 4,
    name: "Anya Stark",
    adresse: "Lafran",
    age: 16,
    telephneProfissionelle: "(921)425-6742",
    telephonePortable: "44786952",
    photo: "",
    role: "contact",
    idEntreprise: 2,
    agentsFavoris: [
      { id: 2 },
    ],

  },
];

export const mockDataAgents = [
  
  {
    id: 2,
    email: "agent@example.com",
    name: "Cersei Lannister",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    registrarId: 123512,
    role: "agent",
    contacts: [
      { id: 1 },
      { id: 3 },
    ],
  },
];

export const mockDataEntreprise = [
  {
    id: 1,
    name: "Entreprise1",
    secteur: "Secteur1",
    address: "Address1",
    codePostal: "CodePostal1",
    ville: "Ville1",
    listContacts: [
      { id: 1 },
      { id: 3 },
    ],
  },
  {
  id: 2,
  name: "Entreprise2",
  secteur: "Secteur2",
  address: "Address2",
  codePostal: "CodePostal2",
  ville: "Ville1",
  listContacts: [
    { id: 2 },
    
  ],
},
{
  id: 5,
  name: "Entreprise2",
  secteur: "Secteur2",
  address: "Address2",
  codePostal: "CodePostal2",
  ville: "Ville1",
  listContacts: [
    { id: 2 },
    
  ],
},
{
  id: 6,
  name: "Entreprise2",
  secteur: "Secteur2",
  address: "Address2",
  codePostal: "CodePostal2",
  ville: "Ville1",
  listContacts: [
    { id: 2 },
    
  ],
},
{
  id: 7,
  name: "Entreprise2",
  secteur: "Secteur2",
  address: "Address2",
  codePostal: "CodePostal2",
  ville: "Ville1",
  listContacts: [
    { id: 2 },
    
  ],
},
{
  id: 8,
  name: "Entreprise2",
  secteur: "Secteur2",
  address: "Address2",
  codePostal: "CodePostal2",
  ville: "Ville1",
  listContacts: [
    { id: 2 },
    
  ],
},
{
  id: 4,
  name: "Entreprise2",
  secteur: "Secteur2",
  address: "Address2",
  codePostal: "CodePostal2",
  ville: "Ville1",
  listContacts: [
    { id: 2 },
    
  ],
},
{
  id: 3,
  name: "Entreprise2",
  secteur: "Secteur2",
  address: "Address2",
  codePostal: "CodePostal2",
  ville: "Ville1",
  listContacts: [
    { id: 2 },
    
  ],
},

];

export const mockDataAccesADistance = [
  {
    id: 1,
    adressIp: "127.0.0.1",
    dateConnexion: "2023-07-20",
    idEntreprise: 1,
    ListOutilAcces: [{id :1}],
    statueconnection: "connecte",
  },
];

export const mockDataOutilAcces = [
  {
    id: 1,
    nomOutil: "Outil1",
  },
];

export const mockDataTypePanne =[
{
  id: 1,
  descriptionTypePanne: "problem windows ",
}
];

export const mockDataTypeTicket =[
  {
    id: 1,
    descriptionTypeTicket: "Demande ",
  },
  {
    id: 2,
    descriptionTypeTicket: "Bug ",
  },
];

export const mockDataPrioriteTicket = [
  {
    id: 1,
    descriptionPriorite: "Faible",
  },
  {
    id: 2,
    descriptionPriorite: "Normale",
  },
  {
    id: 3,
    descriptionPriorite: "Urgente",
  },
];
