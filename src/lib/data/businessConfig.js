// src/lib/data/businessConfig.js

export const businessPolicy = {
	delivery: "We offer swift motorcycle delivery within Nairobi (via local riders, Bolt, or Gata) at a standard fee paid by the customer. For customers upcountry (Mombasa, Nakuru, Kisumu, Eldoret, etc.), we package and dispatch items daily via regional shuttles, bus couriers (like Easy Coach, Guardian, 2NK), or G4S. Payment for parts must be fully cleared via M-Pesa before upcountry dispatch.",
	
	authenticity: "We supply strictly Genuine OEM (Original Equipment Manufacturer) parts and certified premium aftermarket brands (such as ASIMCO for brake systems and premium lubricants). We maintain a strict zero-tolerance policy against counterfeit or substandard components to guarantee your safety on Kenyan roads.",
	
	compatibilityTip: "Because parts vary heavily by import specifications (e.g., Japanese vs. UK spec), always ask the customer for their vehicle's Chassis Number (VIN) or Engine Model from their logbook or the silver plate on their door pillar/firewall. Advise them to send a photo of it directly to our WhatsApp for a 100% guaranteed fitment match.",
	
	workshopServices: "Beyond supplying parts, our fully equipped workshop handles professional installation, minor servicing (oil change in 30-45 mins), brake pad replacement, suspension overhauls, and computer diagnostic scanning. Labor costs are highly competitive and are quoted accurately on-site based on the vehicle type.",

	symptomMappers: `
	Use these symptoms to guide customers to the right inventory items:
	- Loud clicking/clacking when turning the steering wheel sharply -> Point them to CV JOINTS (id: 15).
	- High-pitched squealing or grinding when braking -> Point them to BRAKE PADS (id: 20) or BRAKE SHOES (id: 21).
	- Engine misfiring, rough idling, shaking, or sudden drop in fuel efficiency -> Point them to SPARK PLUGS (id: 7 or 8).
	- Steering wheel vibration, rattling over speed bumps or rough estate roads -> Point them to STABILIZER LINKS (id: 18) or ARM BUSHES (id: 17).
	- Vehicle pulling to one side or a loose steering feel -> Recommend a suspension checkup focusing on BEARINGS (id: 16) and control arms.
	`
};
