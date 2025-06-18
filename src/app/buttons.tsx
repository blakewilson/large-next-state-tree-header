'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { someAction } from "./action";
import Link from "next/link";

// Dummy context, just imagine this is some json state you are holding in a query param
const context = {
  "message": "Hello, Ezekiel! Your order number is: #8",
  "phoneNumber": "362-303-9022",
  "phoneVariation": "+90 346 605 10 39",
  "status": "disabled",
  "name": {
    "first": "Jaron",
    "middle": "Ryan",
    "last": "Konopelski"
  },
  "username": "Jaron-Konopelski",
  "password": "yHRg2HbmV6S21a_",
  "emails": [
    "Lera45@gmail.com",
    "Kaycee_Steuber22@example.com"
  ],
  "location": {
    "street": "88997 Elm Street",
    "city": "North Ima",
    "state": "Wisconsin",
    "country": "Barbados",
    "zip": "74930-7289",
    "coordinates": {
      "latitude": "-48.4529",
      "longitude": "140.2351"
    }
  },
  "website": "https://nervous-tailbud.net/",
  "domain": "enormous-furniture.biz",
  "job": {
    "title": "Human Accounts Supervisor",
    "descriptor": "Lead",
    "area": "Identity",
    "type": "Director",
    "company": "Durgan and Sons"
  },
  "creditCard": {
    "number": "3529-9060-9971-2139",
    "cvv": "561",
    "issuer": "discover"
  },
  "uuid": "ac20c717-1690-4bf7-a9a1-5fe6308f648c",
  "objectId": "67d26b5b8290b6bf4539afd4",
  "testing": {
    "website": "https://nervous-tailbud.net/",
    "domain": "enormous-furniture.biz",
    "job": {
      "title": "Human Accounts Supervisor",
      "descriptor": "Lead",
      "area": "Identity",
      "type": "Director",
      "company": "Durgan and Sons"
    },
    "creditCard": {
      "number": "3529-9060-9971-2139",
      "cvv": "561",
      "issuer": "discover"
    },
    "uuid": "ac20c717-1690-4bf7-a9a1-5fe6308f648c",
    "objectId": "67d26b5b8290b6bf4539afd4"
  },
  "testing2": {
    "website": "https://nervous-tailbud.net/",
    "domain": "enormous-furniture.biz",
    "job": {
      "title": "Human Accounts Supervisor",
      "descriptor": "Lead",
      "area": "Identity",
      "type": "Director",
      "company": "Durgan and Sons"
    },
    "creditCard": {
      "number": "3529-9060-9971-2139",
      "cvv": "561",
      "issuer": "discover"
    },
    "uuid": "ac20c717-1690-4bf7-a9a1-5fe6308f648c",
    "objectId": "67d26b5b8290b6bf4539afd4"
  }
}

export function RedirectToOtherPage() {
  return (
    <Link href={`/other-page?context=${btoa(JSON.stringify(context))}`}>Redirect to other page</Link>
  )
}


export function FireServerAction() {
  return (
    <button onClick={async () => {
      'use client';
      const result = await someAction()
      console.log('action result', result)
    }}>Fire action</button>
  )
}
