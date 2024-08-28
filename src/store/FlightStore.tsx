import { makeAutoObservable } from 'mobx';

export interface TransferFlight {
  id: string;
  airline: string;
  flightNumber: string;
  duration: string;
  departure: string;
  arrival: string;
  departureDate: string;
  arrivalDate: string;
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  duration: string;
  departure: string;
  arrival: string;
  departureDate: string;
  arrivalDate: string;
  hasTransfer: boolean;
  transferFlight: TransferFlight | null ;
}

class FlightStore {
  flights: Flight[] = [];
  selectedFlight: (Flight | null) = null;

  constructor() {
    makeAutoObservable(this);
  }

  generateRandomFlight() {
    const flightCities = ['New York', 'Istanbul', 'Tokyo', 'Hong Kong', 'London', 'Paris', 'Berlin', 'Moscow', 'Dubai', 'Sydney'];
    const randomIndex = Math.floor(Math.random() * flightCities.length);
    
    const hasTransfer = Math.random() > 0.5;

    var randomFlight: Flight = {
      id: Math.random().toString(),
      airline: 'Turkish Airlines',
      flightNumber: 'TK 0001',
      duration: `${Math.floor(Math.random() * 12) + 1}h ${Math.floor(Math.random() * 60)}m`,
      departure: flightCities[randomIndex],
      arrival: flightCities[(randomIndex + 1) % flightCities.length],
      departureDate: new Date().toISOString(),
      arrivalDate: new Date(new Date().getTime() + Math.floor(Math.random() * 12 + 1) * 3600000).toISOString(),
      hasTransfer: hasTransfer,
      transferFlight: null
    };

    if (hasTransfer) {
      const transferIndex = (randomIndex + 2) % flightCities.length;

      var transferFlight: TransferFlight = {
        id: Math.random().toString(),
        airline: 'Turkish Airlines',
        flightNumber: 'TK 0001',
        duration: `${Math.floor(Math.random() * 12) + 1}h ${Math.floor(Math.random() * 60)}m`,
        departure: randomFlight.arrival,
        arrival: flightCities[transferIndex],
        departureDate: new Date(new Date(randomFlight.arrivalDate).getTime() + Math.floor(Math.random() * 2 + 1) * 3600000).toISOString(),
        arrivalDate: new Date(new Date(randomFlight.arrivalDate).getTime() + Math.floor(Math.random() * 12 + 3) * 3600000).toISOString(),
      };
      randomFlight.transferFlight = transferFlight;
      this.flights.push(randomFlight);
    } else {
      this.flights.push(randomFlight);
    }
  }

  deleteFlight(id: string) {
    this.flights = this.flights.filter(flight => flight.id !== id);
  }

  setSelectedFlight(flight: Flight | null){
    this.selectedFlight = flight;
  }
}

export default new FlightStore();
