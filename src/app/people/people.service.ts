import {Injectable} from '@angular/core';

export interface Person {
  index: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  date: number;
}

@Injectable()
export class PeopleService {
  private people = [
    {
      "_id": "58baa2ea5b296cd510b960b5",
      "index": 0,
      "eyeColor": "green",
      "name": "Cole Bartlett",
      "gender": "male",
      "company": "MEDMEX",
      "email": "colebartlett@medmex.com",
      "phone": "+1 (832) 440-2010",
      "date": 1488626410007
    },
    {
      "_id": "58baa2ea9c418228e95becc2",
      "index": 1,
      "eyeColor": "blue",
      "name": "Parks Rodriguez",
      "gender": "male",
      "company": "IZZBY",
      "email": "parksrodriguez@izzby.com",
      "phone": "+1 (954) 455-2572",
      "date": 1488626410008
    },
    {
      "_id": "58baa2eab3f680e798ad0a11",
      "index": 2,
      "eyeColor": "green",
      "name": "Ashley Lowery",
      "gender": "male",
      "company": "NURPLEX",
      "email": "ashleylowery@nurplex.com",
      "phone": "+1 (904) 588-3908",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ea7db3ee7465e68556",
      "index": 3,
      "eyeColor": "blue",
      "name": "Clayton Griffith",
      "gender": "male",
      "company": "UNIA",
      "email": "claytongriffith@unia.com",
      "phone": "+1 (991) 482-2034",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ea7c057d79202b482a",
      "index": 4,
      "eyeColor": "brown",
      "name": "Dodson Dillard",
      "gender": "male",
      "company": "QUIZMO",
      "email": "dodsondillard@quizmo.com",
      "phone": "+1 (888) 475-2082",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ead0ed0937fcf8ba0d",
      "index": 5,
      "eyeColor": "blue",
      "name": "Freida Riggs",
      "gender": "female",
      "company": "COMDOM",
      "email": "freidariggs@comdom.com",
      "phone": "+1 (910) 571-2281",
      "date": 1488626410009
    },
    {
      "_id": "58baa2eae03c7b6f395e880e",
      "index": 6,
      "eyeColor": "green",
      "name": "Mcgowan Case",
      "gender": "male",
      "company": "ARTIQ",
      "email": "mcgowancase@artiq.com",
      "phone": "+1 (894) 493-2788",
      "date": 1488626410009
    },
    {
      "_id": "58baa2ea7c057d79202b482a",
      "index": 4,
      "eyeColor": "brown",
      "name": "Dodson Dillard",
      "gender": "male",
      "company": "QUIZMO",
      "email": "dodsondillard@quizmo.com",
      "phone": "+1 (888) 475-2082",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ead0ed0937fcf8ba0d",
      "index": 5,
      "eyeColor": "blue",
      "name": "Freida Riggs",
      "gender": "female",
      "company": "COMDOM",
      "email": "freidariggs@comdom.com",
      "phone": "+1 (910) 571-2281",
      "date": 1488626410009
    },
    {
      "_id": "58baa2eae03c7b6f395e880e",
      "index": 6,
      "eyeColor": "green",
      "name": "Mcgowan Case",
      "gender": "male",
      "company": "ARTIQ",
      "email": "mcgowancase@artiq.com",
      "phone": "+1 (894) 493-2788",
      "date": 1488626410009
    },
    {
      "_id": "58baa2ea7c057d79202b482a",
      "index": 4,
      "eyeColor": "brown",
      "name": "Dodson Dillard",
      "gender": "male",
      "company": "QUIZMO",
      "email": "dodsondillard@quizmo.com",
      "phone": "+1 (888) 475-2082",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ead0ed0937fcf8ba0d",
      "index": 5,
      "eyeColor": "blue",
      "name": "Freida Riggs",
      "gender": "female",
      "company": "COMDOM",
      "email": "freidariggs@comdom.com",
      "phone": "+1 (910) 571-2281",
      "date": 1488626410009
    },
    {
      "_id": "58baa2eae03c7b6f395e880e",
      "index": 6,
      "eyeColor": "green",
      "name": "Mcgowan Case",
      "gender": "male",
      "company": "ARTIQ",
      "email": "mcgowancase@artiq.com",
      "phone": "+1 (894) 493-2788",
      "date": 1488626410009
    },
    {
      "_id": "58baa2ea7c057d79202b482a",
      "index": 4,
      "eyeColor": "brown",
      "name": "Dodson Dillard",
      "gender": "male",
      "company": "QUIZMO",
      "email": "dodsondillard@quizmo.com",
      "phone": "+1 (888) 475-2082",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ead0ed0937fcf8ba0d",
      "index": 5,
      "eyeColor": "blue",
      "name": "Freida Riggs",
      "gender": "female",
      "company": "COMDOM",
      "email": "freidariggs@comdom.com",
      "phone": "+1 (910) 571-2281",
      "date": 1488626410009
    },
    {
      "_id": "58baa2eae03c7b6f395e880e",
      "index": 6,
      "eyeColor": "green",
      "name": "Mcgowan Case",
      "gender": "male",
      "company": "ARTIQ",
      "email": "mcgowancase@artiq.com",
      "phone": "+1 (894) 493-2788",
      "date": 1488626410009
    },
    {
      "_id": "58baa2ea5b296cd510b960b5",
      "index": 0,
      "eyeColor": "green",
      "name": "Cole Bartlett",
      "gender": "male",
      "company": "MEDMEX",
      "email": "colebartlett@medmex.com",
      "phone": "+1 (832) 440-2010",
      "date": 1488626410007
    },
    {
      "_id": "58baa2ea9c418228e95becc2",
      "index": 1,
      "eyeColor": "blue",
      "name": "Parks Rodriguez",
      "gender": "male",
      "company": "IZZBY",
      "email": "parksrodriguez@izzby.com",
      "phone": "+1 (954) 455-2572",
      "date": 1488626410008
    },
    {
      "_id": "58baa2eab3f680e798ad0a11",
      "index": 2,
      "eyeColor": "green",
      "name": "Ashley Lowery",
      "gender": "male",
      "company": "NURPLEX",
      "email": "ashleylowery@nurplex.com",
      "phone": "+1 (904) 588-3908",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ea7db3ee7465e68556",
      "index": 3,
      "eyeColor": "blue",
      "name": "Clayton Griffith",
      "gender": "male",
      "company": "UNIA",
      "email": "claytongriffith@unia.com",
      "phone": "+1 (991) 482-2034",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ea7c057d79202b482a",
      "index": 4,
      "eyeColor": "brown",
      "name": "Dodson Dillard",
      "gender": "male",
      "company": "QUIZMO",
      "email": "dodsondillard@quizmo.com",
      "phone": "+1 (888) 475-2082",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ead0ed0937fcf8ba0d",
      "index": 5,
      "eyeColor": "blue",
      "name": "Freida Riggs",
      "gender": "female",
      "company": "COMDOM",
      "email": "freidariggs@comdom.com",
      "phone": "+1 (910) 571-2281",
      "date": 1488626410009
    },
    {
      "_id": "58baa2eae03c7b6f395e880e",
      "index": 6,
      "eyeColor": "green",
      "name": "Mcgowan Case",
      "gender": "male",
      "company": "ARTIQ",
      "email": "mcgowancase@artiq.com",
      "phone": "+1 (894) 493-2788",
      "date": 1488626410009
    },
    {
      "_id": "58baa2ea7c057d79202b482a",
      "index": 4,
      "eyeColor": "brown",
      "name": "Dodson Dillard",
      "gender": "male",
      "company": "QUIZMO",
      "email": "dodsondillard@quizmo.com",
      "phone": "+1 (888) 475-2082",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ead0ed0937fcf8ba0d",
      "index": 5,
      "eyeColor": "blue",
      "name": "Freida Riggs",
      "gender": "female",
      "company": "COMDOM",
      "email": "freidariggs@comdom.com",
      "phone": "+1 (910) 571-2281",
      "date": 1488626410009
    },
    {
      "_id": "58baa2eae03c7b6f395e880e",
      "index": 6,
      "eyeColor": "green",
      "name": "Mcgowan Case",
      "gender": "male",
      "company": "ARTIQ",
      "email": "mcgowancase@artiq.com",
      "phone": "+1 (894) 493-2788",
      "date": 1488626410009
    },
    {
      "_id": "58baa2ea7c057d79202b482a",
      "index": 4,
      "eyeColor": "brown",
      "name": "Dodson Dillard",
      "gender": "male",
      "company": "QUIZMO",
      "email": "dodsondillard@quizmo.com",
      "phone": "+1 (888) 475-2082",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ead0ed0937fcf8ba0d",
      "index": 5,
      "eyeColor": "blue",
      "name": "Freida Riggs",
      "gender": "female",
      "company": "COMDOM",
      "email": "freidariggs@comdom.com",
      "phone": "+1 (910) 571-2281",
      "date": 1488626410009
    },
    {
      "_id": "58baa2eae03c7b6f395e880e",
      "index": 6,
      "eyeColor": "green",
      "name": "Mcgowan Case",
      "gender": "male",
      "company": "ARTIQ",
      "email": "mcgowancase@artiq.com",
      "phone": "+1 (894) 493-2788",
      "date": 1488626410009
    },
    {
      "_id": "58baa2ea7c057d79202b482a",
      "index": 4,
      "eyeColor": "brown",
      "name": "Dodson Dillard",
      "gender": "male",
      "company": "QUIZMO",
      "email": "dodsondillard@quizmo.com",
      "phone": "+1 (888) 475-2082",
      "date": 1488626410008
    },
    {
      "_id": "58baa2ead0ed0937fcf8ba0d",
      "index": 5,
      "eyeColor": "blue",
      "name": "Freida Riggs",
      "gender": "female",
      "company": "COMDOM",
      "email": "freidariggs@comdom.com",
      "phone": "+1 (910) 571-2281",
      "date": 1488626410009
    },
    {
      "_id": "58baa2eae03c7b6f395e880e",
      "index": 6,
      "eyeColor": "green",
      "name": "Mcgowan Case",
      "gender": "male",
      "company": "ARTIQ",
      "email": "mcgowancase@artiq.com",
      "phone": "+1 (894) 493-2788",
      "date": 1488626410009
    }
  ];

  constructor() {
  }


  getPeople(): Person[] {
    return this.people;
  }
}
