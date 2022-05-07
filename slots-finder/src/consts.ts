export const OrganizationID = 56;
export const MockPosition = JSON.stringify({ lat: 36, lng: 15, accuracy: 9999 });

export enum ServiceIds {
  BiometricPassportAppointment = 156
}

export enum City {
  Rahat = <any>'רהט',
  TelAviv = <any>'תל אביב',
  Givataim = <any>'גבעתיים',
  BeerSheva = <any>'באר שבע',
  Netivot = <any>'נתיבות',
  RoshHaayin = <any>'ראש העין',
  BneiBrak = <any>'בני ברק',
  Jerusalem = <any>'ירושלים',
  Holon = <any>'חולון',
  Rehovot = <any>'רחובות',
  Ramla = <any>'רמלה',
  Netanya = <any>'נתניה',
  Hadera = <any>'חדרה',
  PetaTivka = <any>'פתח תקוה',
  KfarSaba = <any>'כפר סבא',
  Zefad = <any>'צפת',
  Karmiel = <any>'כרמיאל',
  RishonLezion = <any>'ראשון לציון',
  Herzlia = <any>'הרצליה',
  Eilat = <any>'אילת',
  Sahnin = <any>'סחנין',
  MaaleAdomim = <any>'מעלה אדומים',
  ModiinElite = <any>'מודיעין עילית',
  MaalotTarshiha = <any>'מעלות תרשיחא',
  KiryatAta = <any>'קרית אתא',
  Taybee = <any>'טייבה',
  Yokneaam = <any>'יקנעם',
  KiryatGat = <any>'קרית גת',
  Katzrin = <any>'קצרין',
  DirElAssad = <any>'דיר אל אסד',
  Dimona = <any>'דימונה',
  Sderot = <any>'שדרות',
  Ariel = <any>'אריאל',
  KiryatShomna = <any>'קרית שמונה',
  OmElFahem = <any>'אום אל פחם',
  BeitShemesh = <any>'בית שמש',
  Modiin = <any>'מודיעין',
  MevaseretZion = <any>'מבשרת ציון',
  NofHagalil = <any>'נוף הגליל',
  Tveria = <any>'טבריה',
  Afula = <any>'עפולה',
  Haifa = <any>'חיפה',
  Ashkelon = <any>'אשקלון',
  Ashdod = <any>'אשדוד',
  Nahariya = <any>'נהריה',
  Akko = <any>'עכו',
}

export enum ErrorCode {
  General = 100,
  IdNotValid = 101,
  PhoneNumberNotValid = 102,
  AlreadyHadAnAppointment = 103,
  SetAppointmentGeneralError= 104,
  NoCityFoundForUser = 105,
}
