import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Tactical Drone",
    description: "India has been steadily expanding its tactical drone capabilities for surveillance, reconnaissance, and combat roles. These drones are used primarily by the Indian Army, Indian Air Force (IAF), Indian Navy, Border Security Force (BSF), and Special Forces.",
    image: "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
    details: `
      <div style="line-height:1.7">
        <p><b>Here’s a categorized list of tactical drones (UAVs) that India currently operates or is developing:</b></p>
        <h4> I. Tactical Surveillance & Reconnaissance Drones</h4>
        <ul>
          <li><b>SWITCH UAV</b><br/>
            Developer: ideaForge (India)<br/>
            Range: ~15 km (Line of Sight)<br/>
            Endurance: 2 hours<br/>
            Purpose: Day/Night ISR (Intelligence, Surveillance, Reconnaissance)<br/>
            Features: VTOL, ruggedized for mountain ops<br/>
            Used by: Indian Army (contract signed for over 200 units)
          </li>
          <li><b>NETRA V Series</b><br/>
            Developer: ideaForge + DRDO<br/>
            Type: Quadrotor drone<br/>
            Purpose: Urban surveillance, counter-insurgency, disaster relief<br/>
            Range: ~4-5 km<br/>
            Used by: NSG, CRPF, Army, Police forces
          </li>
          <li><b>DRDO Bharat Drone</b><br/>
            Type: Mini surveillance drone<br/>
            Purpose: High-altitude surveillance (e.g., Ladakh)<br/>
            Features: Thermal imaging, night vision, AI-based analysis<br/>
            Status: Under trials/deployment
          </li>
        </ul>
        <h4> II. Combat / Loitering Munition Drones (Kamikaze Drones)</h4>
        <ul>
          <li><b>SWITCH Loitering Munition (Armed variant)</b><br/>
            Developer: ideaForge<br/>
            Purpose: Tactical precision strike<br/>
            Payload: Explosive warhead<br/>
            Status: In development/testing phase
          </li>
          <li><b>ALFA-S (Air-Launched Flexible Asset)</b><br/>
            Developer: NewSpace Research & Technologies<br/>
            Type: Swarm drone (can be launched from aircraft)<br/>
            Purpose: Saturation attack, air-to-surface strike<br/>
            Status: Prototype tested, IAF plans mass adoption
          </li>
          <li><b>Nagastra-1</b><br/>
            Developer: Solar Industries + Z-Motion<br/>
            Type: Loitering munition<br/>
            Range: ~15–30 km<br/>
            Special Feature: Parachute recovery in case of mission abort<br/>
            Use: Precision strike, anti-terror ops
          </li>
        </ul>
        <h4> III. MALE Tactical Drones (Medium Altitude Long Endurance)</h4>
        <ul>
          <li><b>Heron Mk-II</b><br/>
            Origin: Israel (IAI)<br/>
            Range: 1000+ km<br/>
            Endurance: 36+ hours<br/>
            Purpose: Tactical surveillance, SIGINT<br/>
            Upgrade: Indian Herons being armed with precision strike capabilities<br/>
            Used by: Indian Army, Air Force, Navy
          </li>
          <li><b>Rustom II (Tapas BH-201)</b><br/>
            Developer: DRDO<br/>
            Type: MALE UAV<br/>
            Purpose: Tactical surveillance, recon (unarmed as of now)<br/>
            Status: Under trials<br/>
            Range: 250+ km (planned)<br/>
            Endurance: 20–24 hours
          </li>
        </ul>
        <h4> IV. Swarm Drone Systems</h4>
        <ul>
          <li><b>DRDO Swarm Drones</b><br/>
            Use Case: Simultaneous engagement of multiple targets<br/>
            Features: AI coordination, autonomous flying<br/>
            Status: Under development/testing
          </li>
          <li><b>NewSpace Swarm System</b><br/>
            Used in Gagan Shakti military exercise<br/>
            Launched from: Su-30MKI, helicopters, trucks
          </li>
        </ul>
        <h4>🇮🇳 V. Indigenous Tactical Drone Startups in India</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th style="border-bottom:1px solid #ccc;text-align:left">Startup</th><th style="border-bottom:1px solid #ccc;text-align:left">Notable Product</th></tr>
          </thead>
          <tbody>
            <tr><td>ideaForge</td><td>SWITCH, NETRA</td></tr>
            <tr><td>NewSpace Research</td><td>Swarm & ALFA drones</td></tr>
            <tr><td>Botlab Dynamics</td><td>Light show drones, swarm tech</td></tr>
            <tr><td>Z-Motion</td><td>Loitering munitions</td></tr>
            <tr><td>Dhaksha Unmanned Systems</td><td>Multirole drones for Army</td></tr>
          </tbody>
        </table>
        <h4> Future Tactical Drone Programs</h4>
        <ul>
          <li>Armed Heron TP UAVs – Strategic deal with Israel for armed variant</li>
          <li>HALE UAV – Ghatak UCAV – Stealth combat drone under development</li>
          <li>DRDO Archer-NG – Upgraded version of Rustom for tactical ops</li>
        </ul>
      </div>
    `
  },
  {
    id: 2,
    title: "Advanced Helmet",
    description: "An Advanced Combat Helmet is a ballistic protective headgear designed for modern combat scenarios. Unlike traditional steel helmets, ACHs are made from high-strength, lightweight materials such as Kevlar, UHMWPE, and composite fibers, offering protection against bullets, shrapnel, and blunt force trauma.",
    image: "https://images.unsplash.com/photo-1650627807081-aaedee179703?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2YW5jZWQlMjBtaWxpdGFyeSUyMGhlbG1ldHxlbnwwfHwwfHx8MA%3D%3D",
    details: `
      <div style="line-height:1.7">
        <p>Modern ACHs are modular, meaning they can be equipped with: Night Vision Goggles (NVGs), Communication headsets, Cameras/tactical flashlights, HUD systems, Face visors and gas masks.</p>
        <h4>🇮🇳 Indian Army's Use of Advanced Helmets</h4>
        <p>India's modernization program aims to replace old steel "Patka" helmets with modern ballistic helmets for all frontline soldiers, with enhanced helmets for special operations forces.</p>
        <h4>🔰 1. MKU Mukut Helmet (Indigenous)</h4>
        <ul>
          <li>Developed by: MKU Limited, Kanpur</li>
          <li>Supplied to: Indian Army, Navy, NSG, CAPFs</li>
          <li>NIJ Level IIIA: Protects against 9mm, .44 Magnum, and shell fragments</li>
          <li>Bulletproof from 5m range (against 9mm handgun fire)</li>
          <li>Multi-hit protection & shrapnel resistance</li>
          <li>Weight: ~1.2–1.5 kg</li>
          <li>Material: Kevlar composite</li>
          <li>Modular Mounts: For NVGs, lights, and headsets</li>
          <li>Ergonomic Padding: Improved comfort and shock absorption</li>
          <li>Retention System: 3/4-point adjustable chin strap</li>
          <li>40% lighter than older helmets</li>
          <li>Fog-resistant visor (optional)</li>
          <li>Compatible with bulletproof face shield</li>
          <li>Used in extreme conditions (e.g., Siachen, LoC)</li>
        </ul>
        <h4>🎯 2. FAST Helmet (Future Assault Shell Technology)</h4>
        <ul>
          <li>Used by: Para SF, MARCOS, Garud Commandos, NSG</li>
          <li>Inspired by NATO/US designs; some imported, some Indian-made</li>
          <li>NIJ Level IIIA+ or higher</li>
          <li>High cut for better mobility and headset use</li>
          <li>Side Rails: Mount cameras, flashlights, strobes</li>
          <li>NVG Mount: Compatible with night vision goggles (PVS-14, Bharat NVG)</li>
          <li>Modular Design: High-cut design for better comfort during comms</li>
          <li>Ballistic Visor (Optional): Face protection in CQB</li>
          <li>Integrated Bone Conduction Audio, HUD, Thermal overlays on visor (on prototypes)</li>
        </ul>
        <h4>🛠️ 3. DRDO Smart Helmet (Under Development)</h4>
        <ul>
          <li>Developed by: DRDO + BEL</li>
          <li>Part of the F-INSAS program</li>
          <li>HUD for real-time target data and navigation</li>
          <li>Built-in NVG & Thermal Cam</li>
          <li>Biometric Monitoring: Heart rate, hydration, oxygen</li>
          <li>Integrated Comms System: Radio & satellite</li>
          <li>AI Assistance: Threat detection & targeting</li>
          <li>Integrate with body armor, AI-driven weapon systems, situational awareness systems (C4ISR)</li>
          <li>Helmet integrates with soldier’s battlefield computer/tablet</li>
          <li>Real-time data sharing via secured network</li>
        </ul>
        <h4>🔍 Comparison Table</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Feature</th><th>MKU Mukut</th><th>FAST Helmet</th><th>DRDO Smart Helmet</th></tr>
          </thead>
          <tbody>
            <tr><td>Ballistic Level</td><td>IIIA</td><td>IIIA+</td><td>(Targeting IV)</td></tr>
            <tr><td>Weight</td><td>~1.2–1.5 kg</td><td>~1.1–1.4 kg</td><td>TBD</td></tr>
            <tr><td>NVG Compatible</td><td>✅</td><td>✅</td><td>✅ (Integrated)</td></tr>
            <tr><td>Comms System</td><td>Optional</td><td>Yes</td><td>Fully Integrated</td></tr>
            <tr><td>HUD</td><td>❌</td><td>❌</td><td>✅</td></tr>
            <tr><td>Thermal Imaging</td><td>❌</td><td>❌</td><td>✅</td></tr>
            <tr><td>Smart Features</td><td>❌</td><td>Some</td><td>Full AI+HUD</td></tr>
          </tbody>
        </table>
        <h4>🔄 Transition from Patka to ACH</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Patka Helmet</th><th>Modern ACH</th></tr>
          </thead>
          <tbody>
            <tr><td>Steel-based, heavy</td><td>Kevlar composite, lightweight</td></tr>
            <tr><td>No comms/NVG support</td><td>Modular NVG, comms, HUD</td></tr>
            <tr><td>Poor ventilation</td><td>Better padding & air flow</td></tr>
            <tr><td>Bullet-resistant front</td><td>360° protection</td></tr>
          </tbody>
        </table>
        <h4>🔭 Future Trends in Combat Helmets</h4>
        <ul>
          <li>AI Integration</li>
          <li>Augmented Reality (AR)</li>
          <li>Modular Sensors</li>
          <li>Voice Control & Gesture Inputs</li>
          <li>Facial Recognition</li>
        </ul>
      </div>
    `
  },
  {
    id: 3,
    title: "Night Vision Optics",
    description: "Night Vision Optics (NVOs) are electro-optical devices that allow military personnel to see in low-light or complete darkness by amplifying ambient light or converting infrared radiation into visible images. Essential in night warfare, surveillance, counter-insurgency, and special operations.",
    image: "https://images.unsplash.com/photo-1602667341932-6e6404cd20ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG5pZ2h0JTIwdmlzaW9uJTIwb3B0aWNzJTIwdXNlZCUyMGJ5JTIwYXJteXxlbnwwfHwwfHx8MA%3D%3D",
    details: `
      <div style="line-height:1.7">
        <h4>🧠 How Night Vision Works</h4>
        <ul>
          <li><b>Image Intensification (I²):</b> Amplifies light, produces green-hued images. Examples: PVS-14, BEL Bharat NVD.</li>
          <li><b>Thermal Imaging:</b> Detects infrared radiation (heat), works in total darkness. Examples: BEL Thermal Imager, DRDO Netra-V Thermal Drones.</li>
        </ul>
        <h4>🇮🇳 Types of Night Vision Devices Used by Indian Forces</h4>
        <ul>
          <li><b>Monocular NVG (Night Vision Goggles):</b> PVS-14, BEL Bharat Monocular NVD, MKU NVGs, MARCOS/PARA SF goggles.</li>
          <li><b>Weapon-Mounted Night Sights:</b> DRDO Passive Night Sight, Thermal Weapon Sights (TWS), MKU & Tonbo Imaging sights.</li>
          <li><b>Thermal Imaging Binoculars/Monoculars:</b> BEL TI Binoculars, NETRA Thermal UAV Payload, Tata Advanced Systems Handheld TI, Tonbo Argus TI Scope.</li>
          <li><b>Night Vision for Vehicles & Drones:</b> BMP-2 IFV, T-90 & Arjun Tanks, SWITCH UAV, DRDO Netra V2.</li>
        </ul>
        <h4>📡 Indigenous Development of NV Technology</h4>
        <ul>
          <li>DRDO IRDE: Gen II/III NV devices, weapon sights</li>
          <li>BEL: Night vision binoculars, periscopes, thermal sights</li>
          <li>MKU Ltd: Helmet-mounted NVGs, thermal optics</li>
          <li>Tonbo Imaging: AI-driven NVDs, TI sights, surveillance payloads</li>
        </ul>
        <h4>🌐 Generations of Night Vision</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Generation</th><th>Features</th><th>Used In</th></tr>
          </thead>
          <tbody>
            <tr><td>Gen I</td><td>Basic amplification, poor clarity</td><td>Mostly obsolete</td></tr>
            <tr><td>Gen II</td><td>Better resolution, some thermal fusion</td><td>Patrol, rifle scopes</td></tr>
            <tr><td>Gen III</td><td>High-resolution, auto-brightness</td><td>SF, elite units</td></tr>
            <tr><td>Gen III+ / Fusion</td><td>Combines thermal + night vision</td><td>Advanced SF use, under trials</td></tr>
          </tbody>
        </table>
        <h4>🧠 Advanced Features in Modern NV Devices</h4>
        <ul>
          <li>Auto-Gated Tubes</li>
          <li>Built-in IR Illuminator</li>
          <li>Digital Night Vision</li>
          <li>AI & Target Recognition</li>
          <li>Heads-Up Display Integration</li>
        </ul>
      </div>
    `
  },
  {
    id: 4,
    title: "Combat Vest",
    description: "A combat vest is an essential part of a soldier’s battlefield gear, providing ballistic protection, carrying ammunition & mission gear, and integrating with modern tech such as GPS, communication systems, and body sensors.",
    image: "https://images.unsplash.com/photo-1703763731188-071576176011?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tYmF0JTIwdmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    details: `
      <div style="line-height:1.7">
        <h4>🪖 Purpose of Combat Vests</h4>
        <ul>
          <li>Protection: Against bullets, shrapnel, and knives.</li>
          <li>Load Management: Carries ammunition, grenades, med kits, radio, water, etc.</li>
          <li>Mobility: Lightweight and ergonomic for quick movements.</li>
          <li>Integration: Works with helmets, weapons, communication gear.</li>
        </ul>
        <h4>🇮🇳 Combat Vests Used by Indian Armed Forces</h4>
        <ul>
          <li><b>MKU Kavro Soldier Protection System:</b> Modular Tactical Vest with Ballistic Plates, NIJ Level III & IV protection, MOLLE webbing, fire-resistant fabric, hydration pack compatibility.</li>
          <li><b>DRDO Modular Combat Vest (F-INSAS Project):</b> Lightweight Kevlar weave, compatible with rifle plates, integrated comms, biometric sensors, GPS, night-vision battery holders.</li>
          <li><b>Bulletproof Vests (Standard Infantry):</b> Level IIIA/III vests, 7–10 kg with ceramic plates, used by Infantry, BSF, Assam Rifles, CRPF.</li>
          <li><b>Special Forces Combat Vest:</b> High mobility, quick release, hydration system, NVG battery compartments, side armor, tactical knife, radio, grenade slots.</li>
        </ul>
        <h4>📦 Typical Gear Stored in a Combat Vest</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Pouch/Section</th><th>Item</th></tr>
          </thead>
          <tbody>
            <tr><td>Magazine Pouches</td><td>Rifle mags (INSAS, AK, SIG)</td></tr>
            <tr><td>Utility Pouch</td><td>Flashlight, multi-tool, compass</td></tr>
            <tr><td>IFAK</td><td>First-aid kit</td></tr>
            <tr><td>Grenade Pouch</td><td>Smoke/fragmentation grenades</td></tr>
            <tr><td>Hydration Pouch</td><td>CamelBak/water bottle</td></tr>
            <tr><td>Radio Slot</td><td>Communication set</td></tr>
            <tr><td>Admin Pouch</td><td>Maps, notebook, pen, ID</td></tr>
            <tr><td>Dump Pouch</td><td>Used magazines</td></tr>
            <tr><td>Knife Sheath</td><td>Tactical combat knife</td></tr>
          </tbody>
        </table>
        <h4>🔐 Ballistic Protection Levels</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>NIJ Level</th><th>Stops</th><th>Common Usage</th></tr>
          </thead>
          <tbody>
            <tr><td>Level II</td><td>9mm, .357 Magnum</td><td>Police</td></tr>
            <tr><td>Level IIIA</td><td>.44 Magnum, 9mm SMG</td><td>Riot control, patrolling</td></tr>
            <tr><td>Level III</td><td>7.62mm NATO</td><td>Army infantry, SF</td></tr>
            <tr><td>Level IV</td><td>Armor-piercing 7.62mm</td><td>Elite forces, close combat zones</td></tr>
          </tbody>
        </table>
        <h4>🧠 Smart Combat Vests (Under Development)</h4>
        <ul>
          <li>GPS tracker integration</li>
          <li>Real-time health monitoring sensors</li>
          <li>Body-worn cameras</li>
          <li>Battery pouch for NVG, comms</li>
          <li>AI-based threat alert feedback</li>
        </ul>
        <h4>🪖 F-INSAS Vest – Integration with Smart Equipment</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Gear</th><th>Integration Point</th></tr>
          </thead>
          <tbody>
            <tr><td>Helmet</td><td>Cable channel for NVG battery</td></tr>
            <tr><td>Rifle</td><td>Sling + cable for power input</td></tr>
            <tr><td>Radio</td><td>Built-in mic wiring via vest</td></tr>
            <tr><td>Display Unit</td><td>Mounted on chest/shoulder (future)</td></tr>
            <tr><td>Power Bank</td><td>Rear battery pack slot</td></tr>
            <tr><td>Body Sensor</td><td>Inside mesh lining of vest</td></tr>
          </tbody>
        </table>
        <h4>🎯 Combat Vest vs Plate Carrier vs Tactical Vest</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Feature</th><th>Combat Vest</th><th>Plate Carrier</th><th>Tactical Vest</th></tr>
          </thead>
          <tbody>
            <tr><td>Ballistic Protection</td><td>✅</td><td>✅ (primary)</td><td>❌</td></tr>
            <tr><td>Load Carrying</td><td>✅</td><td>Moderate</td><td>✅</td></tr>
            <tr><td>Mobility</td><td>Medium</td><td>High</td><td>Very High</td></tr>
            <tr><td>Weight</td><td>6–10 kg</td><td>4–7 kg</td><td>2–4 kg</td></tr>
            <tr><td>Ideal For</td><td>Infantry, SF</td><td>SF, assault teams</td><td>Police, recon</td></tr>
          </tbody>
        </table>
        <h4>🏭 Indian Manufacturers of Combat Vests</h4>
        <ul>
          <li>MKU Ltd: Kavro series vests, ballistic plates</li>
          <li>TATA Advanced Systems: Smart soldier kits, modular armor</li>
          <li>DRDO: Indigenous Level III/IV vests, modular gear</li>
          <li>Anjani Technoplast, Aditya Precitech: Supplying vests to CAPFs & Army</li>
          <li>BEL: Tech-integrated body armor</li>
        </ul>
        <h4>🌐 Global Standards Followed</h4>
        <ul>
          <li>NIJ (US National Institute of Justice)</li>
          <li>IS 17051 (Indian Standard for ballistic protection)</li>
          <li>STANAG (NATO Standardization)</li>
        </ul>
        <h4>📸 Visual Layout (Typical Combat Vest Setup)</h4>
        <ul>
          <li>Chest: 3–4 Magazine Pouches, Admin Pouch, Radio Slot</li>
          <li>Abdomen: Grenade Pouches, Medical Pouch (IFAK)</li>
          <li>Sides: Utility Pouches, Hydration Carrier</li>
          <li>Back: Hydration Pack/CamelBak, Ballistic Plate Slot</li>
        </ul>
        <h4>🚀 Future Innovations in Indian Combat Vests</h4>
        <ul>
          <li>Cooling Systems for high-temperature areas</li>
          <li>AI-connected vests for battlefield data collection</li>
          <li>Self-sealing fabrics against punctures</li>
          <li>Wearable exoskeleton integration</li>
        </ul>
      </div>
    `
  },
  {
    id: 5,
    title: "Tactical Radio",
    description: "A tactical radio is a secure, portable, and rugged communication device used by soldiers and commanders on the battlefield. It allows real-time voice, data, and situational awareness between units during combat, surveillance, or coordination missions.",
    image: "https://images.unsplash.com/photo-1717749789408-f6f73c9e6aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFjdGljYWwlMjByYWRpb3xlbnwwfHwwfHx8MA%3D%3D",
    details: `
      <div style="line-height:1.7">
        <h4>🎯 Purpose of Tactical Radios</h4>
        <ul>
          <li>Secure point-to-point and networked communication</li>
          <li>Command and control (C2) functions</li>
          <li>GPS-based coordination</li>
          <li>Data transmission (text, images, sensor data)</li>
          <li>Enhanced battlefield awareness and enemy tracking</li>
          <li>Encrypted communication to prevent enemy interception</li>
        </ul>
        <h4>🇮🇳 Types of Tactical Radios Used by Indian Armed Forces</h4>
        <ul>
          <li><b>BEL Software Defined Radio (SDR):</b> SDR–Manpack, SDR–Handheld, SDR–Vehicular, SDR–Naval. Frequency agility, AES-256 encryption, GPS integration, resistant to jamming.</li>
          <li><b>TCS Tactical Radio:</b> Digital mobile network for tactical units, secure comms in hostile terrain, under development with DRDO, BEL.</li>
          <li><b>Motorola and Thales Radios:</b> Imported/licensed for special units. Secure comms, long battery life, water-resistant, shockproof.</li>
          <li><b>HF/VHF/UHF Radios by DRDO:</b> Used by border units, artillery, signal regiments. Anti-jamming, medium range.</li>
        </ul>
        <h4>🔒 Encryption & Security</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Security Feature</th><th>Details</th></tr>
          </thead>
          <tbody>
            <tr><td>AES-256</td><td>Advanced Encryption Standard used in SDR</td></tr>
            <tr><td>Frequency Hopping</td><td>Automatic channel changes to avoid interception</td></tr>
            <tr><td>Tamper-Proofing</td><td>Auto data wipe on compromise</td></tr>
            <tr><td>Digital Signaling</td><td>Ensures clarity and anti-spoof protection</td></tr>
          </tbody>
        </table>
        <h4>🔌 Types of Tactical Radios by Deployment</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Type</th><th>Usage</th><th>Range</th><th>Battery Life</th></tr>
          </thead>
          <tbody>
            <tr><td>Handheld (HH)</td><td>Infantry, special ops</td><td>1–5 km</td><td>6–12 hrs</td></tr>
            <tr><td>Manpack</td><td>Platoon-level, artillery</td><td>5–20 km</td><td>12–18 hrs</td></tr>
            <tr><td>Vehicular</td><td>Tanks, APCs, trucks</td><td>20–50 km</td><td>Vehicle-powered</td></tr>
            <tr><td>Base Station</td><td>HQ-level communication</td><td>50–100+ km</td><td>AC/DC powered</td></tr>
          </tbody>
        </table>
        <h4>🧠 Smart Features in Modern Indian Tactical Radios</h4>
        <ul>
          <li>Voice & Data</li>
          <li>GPS</li>
          <li>Encryption</li>
          <li>Multi-Band Support</li>
          <li>Mapping Integration</li>
          <li>Power Management</li>
          <li>App Control (Future)</li>
        </ul>
        <h4>🛠️ Indian Tactical Radio Manufacturers</h4>
        <ul>
          <li>BEL: SDR family, TCS radios</li>
          <li>DRDO: R&D in SDRs, COMINT, SIGINT systems</li>
          <li>TATA Advanced Systems: Defense communication infrastructure</li>
          <li>HAL: Onboard radios for aircraft</li>
          <li>Paras Defence: RF & EW systems for integration</li>
        </ul>
        <h4>🧪 Ruggedness Standards</h4>
        <ul>
          <li>MIL-STD-810G: Dust, shock, water, vibration</li>
          <li>IP67/IP68: Waterproof and immersion-proof</li>
          <li>-30°C to +60°C operation</li>
        </ul>
        <h4>⚔️ Example Use Case: Indian Special Forces Mission</h4>
        <ul>
          <li>Commander with Manpack SDR gives instructions.</li>
          <li>Infantry units use handheld radios to coordinate breach.</li>
          <li>UAV feed is routed via data channel to command.</li>
          <li>Enemy intercepts fail due to AES-256 encryption and frequency hopping.</li>
          <li>Operation succeeds with real-time comms and zero compromise.</li>
        </ul>
        <h4>🛰️ Future Developments in India</h4>
        <ul>
          <li>AI-powered battlefield radios</li>
          <li>Mesh networking radios</li>
          <li>Quantum-safe encryption</li>
          <li>Integration with satellite phones (GSAT-7A/7B)</li>
        </ul>
      </div>
    `
  },
  {
    id: 6,
    title: "Defense Radar",
    description: "Radars are the eyes of a nation’s defense system. They are electromagnetic systems used to detect, track, and classify objects such as aircraft, missiles, ships, vehicles, and drones—critical for early warning, surveillance, air defense, and fire control.",
    image: "https://images.unsplash.com/photo-1742608383899-9b5f2658616c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlZmVuY2UlMjByYWRhcnxlbnwwfHwwfHx8MA%3D%3D",
    details: `
      <div style="line-height:1.7">
        <h4>🌀 What is a Radar?</h4>
        <ul>
          <li>Radar stands for Radio Detection and Ranging. It transmits radio waves that reflect off objects and return, allowing the system to calculate distance, direction, height, and speed.</li>
        </ul>
        <h4>📦 Types of Defence Radars (by Function)</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Type</th><th>Description</th><th>Use</th></tr>
          </thead>
          <tbody>
            <tr><td>Surveillance Radar</td><td>Long-range detection</td><td>Airspace monitoring</td></tr>
            <tr><td>Tracking Radar</td><td>Follows specific targets</td><td>Fire control, intercept</td></tr>
            <tr><td>Fire-Control Radar</td><td>Guides missiles/guns</td><td>SAM systems, aircraft</td></tr>
            <tr><td>Weather Radar</td><td>Detects precipitation</td><td>Aviation safety</td></tr>
            <tr><td>Multifunction Radar</td><td>Combines all above</td><td>AEW&C, naval, missile defense</td></tr>
            <tr><td>Ground Penetrating Radar</td><td>Scans underground</td><td>Tunnel/mine detection</td></tr>
          </tbody>
        </table>
        <h4>🇮🇳 Indian Defence Radars (Indigenous & Imported)</h4>
        <ul>
          <li><b>Rohini Radar:</b> BEL & DRDO, 3D Surveillance Radar, Range: 150–180 km, 360° coverage, tracks 100+ targets.</li>
          <li><b>Aslesha Radar:</b> DRDO, 3D L-Band Low Level Radar, used by IAF.</li>
          <li><b>Swordfish Radar:</b> DRDO + Israeli Elta, Long-Range Tracking Radar, Range: >600 km, BMD Program.</li>
          <li><b>Revathi Radar:</b> Indian Navy, 3D Medium Range Surveillance, Range: 250 km.</li>
          <li><b>Arudhra Radar:</b> Based on Elta EL/M-2084, AESA multifunction radar, Range: Up to 400 km.</li>
        </ul>
        <h4>🛰️ Airborne Radars</h4>
        <ul>
          <li>Netra AEW&C, Phalcon AWACS, Uttam AESA Radar</li>
        </ul>
        <h4>⚓ Naval Radars</h4>
        <ul>
          <li>RAWL-02 Mk3, MF-STAR (EL/M-2248), Revathi-NG</li>
        </ul>
        <h4>🚀 Missile Defense Radars</h4>
        <ul>
          <li>Swordfish (DRDO), Green Pine (Israel), Ashwini Radar</li>
        </ul>
        <h4>🔍 Radar Bands and Capabilities</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Band</th><th>Frequency</th><th>Use</th></tr>
          </thead>
          <tbody>
            <tr><td>L-Band</td><td>1–2 GHz</td><td>Long-range tracking</td></tr>
            <tr><td>S-Band</td><td>2–4 GHz</td><td>Weather, mid-range detection</td></tr>
            <tr><td>X-Band</td><td>8–12 GHz</td><td>Fire control, high-res imaging</td></tr>
            <tr><td>Ku/K-Band</td><td>12–40 GHz</td><td>UAV & drone detection</td></tr>
            <tr><td>UHF/VHF</td><td>Below 1 GHz</td><td>Anti-stealth detection</td></tr>
          </tbody>
        </table>
        <h4>🧠 Smart Features in Modern Radars</h4>
        <ul>
          <li>AESA, Track While Scan, Low Probability of Intercept, Doppler Processing, Jamming Resistance</li>
        </ul>
        <h4>🛠️ Indian Radar Developers</h4>
        <ul>
          <li>DRDO, BEL, HAL, Tata Advanced Systems, Data Patterns, Astra Microwave</li>
        </ul>
        <h4>🧪 New Generation Radars Under Development</h4>
        <ul>
          <li>Uttam Mk2 AESA for AMCA, Ashwini Radar, Hilltop radar stations, Swathi Weapon Locating Radar</li>
        </ul>
        <h4>🌍 Comparison (India vs World)</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Feature</th><th>India (Uttam/Swordfish)</th><th>USA (AN/TPY-2)</th><th>Israel (Green Pine)</th></tr>
          </thead>
          <tbody>
            <tr><td>Max Range</td><td>600–800 km</td><td>1000+ km</td><td>500–900 km</td></tr>
            <tr><td>Type</td><td>AESA, 3D, Tracking</td><td>Phased Array</td><td>AESA</td></tr>
            <tr><td>Role</td><td>AEW&C, BMD</td><td>BMD</td><td>BMD</td></tr>
            <tr><td>Mobility</td><td>Semi-mobile/air/naval</td><td>Fixed</td><td>Fixed</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 7,
    title: "Armored Vehicle",
    description: "Armored vehicles are combat platforms protected with armor plating and designed for battlefield mobility, firepower, and crew safety. They range from tanks to infantry carriers, reconnaissance vehicles, and MRAPs.",
    image: "https://images.unsplash.com/photo-1630719003242-cc15a7244d16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJtb3JlZCUyMHZlaGljbGV8ZW58MHx8MHx8fDA%3D",
    details: `
      <div style="line-height:1.7">
        <h4>🔰 Types of Armored Vehicles</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Type</th><th>Role</th><th>Example (India)</th></tr>
          </thead>
          <tbody>
            <tr><td>Main Battle Tanks (MBTs)</td><td>Heavy assault, frontline firepower</td><td>Arjun Mk1A, T-90 Bhishma</td></tr>
            <tr><td>Infantry Fighting Vehicles (IFVs)</td><td>Troop transport + support fire</td><td>BMP-2 Sarath</td></tr>
            <tr><td>Armored Personnel Carriers (APCs)</td><td>Safe troop movement</td><td>Kalyani M4, WhAP</td></tr>
            <tr><td>Mine Resistant Ambush Protected (MRAP)</td><td>Counter-IED, patrols</td><td>Tata Kestrel, M4</td></tr>
            <tr><td>Armored Reconnaissance Vehicles</td><td>Surveillance and scouting</td><td>Ferret Scout Car (historic)</td></tr>
            <tr><td>Self-Propelled Artillery (SPH)</td><td>Mobile artillery</td><td>K9 Vajra-T</td></tr>
          </tbody>
        </table>
        <h4>🇮🇳 Key Indian Armored Vehicles</h4>
        <ul>
          <li><b>Arjun Main Battle Tank (Mk1A):</b> Indigenous MBT, 68.6 tons, 120mm gun, Kanchan Composite Armor, ERA, night vision, inducted in Indian Army.</li>
          <li><b>T-90S Bhishma:</b> Russia/India, 125mm gun, infrared jammers, NBC protection, advanced fire control.</li>
          <li><b>BMP-2 Sarath (IFV):</b> 3 crew + 7 soldiers, 30mm cannon, ATGM, amphibious, border patrol.</li>
          <li><b>K9 Vajra-T (SPH):</b> 155mm/52, 40–50 km range, deployed in Ladakh.</li>
          <li><b>TATA Kestrel / WhAP (APC):</b> 8×8, STANAG Level 4, remote weapon station, amphibious.</li>
          <li><b>Kalyani M4:</b> 4×4 MRAP, blast protection, 8–10 crew.</li>
        </ul>
        <h4>🔍 Key Features of Armored Vehicles</h4>
        <ul>
          <li>Armor Protection, Firepower, Mobility, Amphibious Capability, NBC Protection, Communication, Thermal/Night Vision</li>
        </ul>
        <h4>⚙️ Advanced Technologies in Modern Indian Armored Vehicles</h4>
        <ul>
          <li>BMS, RWS, APS, LWR, Situational Awareness Cameras</li>
        </ul>
        <h4>🧪 Under Development & Future Projects</h4>
        <ul>
          <li>FICV, Next-Gen MBT, Light Tank ‘Zorawar’, UGVs</li>
        </ul>
        <h4>🌍 Comparison Table</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Vehicle</th><th>Type</th><th>Origin</th><th>Role</th><th>Notes</th></tr>
          </thead>
          <tbody>
            <tr><td>Arjun Mk1A</td><td>MBT</td><td>India</td><td>Assault</td><td>Heavy tank, indigenous</td></tr>
            <tr><td>T-90 Bhishma</td><td>MBT</td><td>India/Russia</td><td>Main force</td><td>Backbone of regiments</td></tr>
            <tr><td>BMP-2 Sarath</td><td>IFV</td><td>India/Russia</td><td>Infantry transport</td><td>Amphibious</td></tr>
            <tr><td>K9 Vajra-T</td><td>SPH</td><td>India/Korea</td><td>Artillery</td><td>High-altitude capable</td></tr>
            <tr><td>TATA Kestrel</td><td>APC</td><td>India</td><td>Troop transport</td><td>Modular, amphibious</td></tr>
            <tr><td>Kalyani M4</td><td>MRAP</td><td>India/South Africa</td><td>Patrol</td><td>Blast protection</td></tr>
          </tbody>
        </table>
        <h4>🪖 Use-Cases in Indian Context</h4>
        <ul>
          <li>LoC/LAC patrols, tank battles, high-altitude ops, urban combat, UN Missions</li>
        </ul>
        <h4>📍 Deployment Examples</h4>
        <ul>
          <li>Arjun – Rajasthan desert sectors</li>
          <li>K9 Vajra – Eastern Ladakh</li>
          <li>Kalyani M4 – Kashmir SF</li>
          <li>BMP-2 – Borders</li>
        </ul>
      </div>
    `
  },
  {
    id: 8,
    title: "Missile System",
    description: "India has developed a wide range of strategic and tactical missile systems, through DRDO, ISRO, and collaborations with Russia, Israel, and France. These include ballistic, cruise, air-to-air, surface-to-air, anti-tank, and hypersonic missiles.",
    image: "https://images.unsplash.com/photo-1710750266544-d5b41e6847aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlzc2lsZSUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    details: `
      <div style="line-height:1.7">
        <h4>🔰 Classification of Missile Systems</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Type</th><th>Purpose</th><th>Examples</th></tr>
          </thead>
          <tbody>
            <tr><td>Ballistic Missiles</td><td>Long-range strategic nuclear/non-nuclear delivery</td><td>Agni Series, Prithvi</td></tr>
            <tr><td>Cruise Missiles</td><td>Precision strike, terrain-hugging</td><td>BrahMos, Nirbhay</td></tr>
            <tr><td>Air-to-Air Missiles</td><td>Engage aerial threats</td><td>Astra, R-73, Derby</td></tr>
            <tr><td>Surface-to-Air Missiles</td><td>Intercept aircraft/missiles</td><td>Akash, Barak-8</td></tr>
            <tr><td>Anti-Tank Guided Missiles</td><td>Destroy armored vehicles</td><td>Nag, Helina</td></tr>
            <tr><td>Hypersonic Missiles</td><td>Very high-speed strike</td><td>HSTDV (dev.)</td></tr>
            <tr><td>SLBMs</td><td>Strategic second-strike</td><td>K-15, K-4</td></tr>
          </tbody>
        </table>
        <h4>🇮🇳 Key Indian Missile Systems</h4>
        <ul>
          <li><b>Agni Series:</b> Ballistic, nuclear-capable, solid-fuel, mobile launchers. Agni-I to Agni-V, Agni-P.</li>
          <li><b>Prithvi Series:</b> SRSAM, 150–350 km, Army/Air Force/Navy variants.</li>
          <li><b>BrahMos Cruise Missile:</b> Supersonic, 450–800 km, land/ship/sub/air, world's fastest cruise missile.</li>
          <li><b>Nirbhay Cruise Missile:</b> Subsonic, 1,000–1,500 km, indigenous INS-GPS.</li>
          <li><b>Akash SAM:</b> 30–40 km, medium-range, truck-mounted, Army/Air Force.</li>
          <li><b>Barak-8:</b> Long-range SAM, 70–100+ km, naval/ground air defense.</li>
          <li><b>Astra Air-to-Air Missile:</b> 110+ km, BVR, Su-30MKI/Tejas.</li>
          <li><b>Nag/Helina/MPATGM:</b> ATGMs, fire-and-forget, top-attack, tanks with ERA.</li>
          <li><b>K-Series SLBMs:</b> K-15, K-4, K-5/K-6, second-strike nuclear capability.</li>
          <li><b>HSTDV:</b> Hypersonic testbed, Mach 6.5+, DRDO.</li>
        </ul>
        <h4>🔒 Nuclear Doctrine & Missile Use</h4>
        <ul>
          <li>No First Use (NFU) nuclear policy, credible minimum deterrence, second-strike capability.</li>
        </ul>
        <h4>🌍 Export & Global Interest</h4>
        <ul>
          <li>BrahMos exported to Philippines, interest in Akash, Astra, Nag.</li>
        </ul>
        <h4>🧭 Missile Systems Comparison (Snapshot)</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Missile</th><th>Type</th><th>Range</th><th>Speed</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Agni-V</td><td>Ballistic</td><td>5,000+ km</td><td>Mach 24+</td><td>Inducted</td></tr>
            <tr><td>BrahMos</td><td>Cruise</td><td>450–800 km</td><td>Mach 2.8</td><td>In service</td></tr>
            <tr><td>Nirbhay</td><td>Cruise</td><td>~1,000–1,500 km</td><td>Subsonic</td><td>Under trials</td></tr>
            <tr><td>Astra</td><td>Air-to-Air</td><td>110+ km</td><td>Mach 4+</td><td>Inducted</td></tr>
            <tr><td>Akash</td><td>SAM</td><td>~40 km</td><td>Mach 2.5</td><td>In service</td></tr>
            <tr><td>Nag</td><td>ATGM</td><td>~7 km</td><td>Subsonic</td><td>Inducted</td></tr>
            <tr><td>K-15</td><td>SLBM</td><td>~750 km</td><td>Mach 7+</td><td>Deployed</td></tr>
          </tbody>
        </table>
        <h4>📍 Key Development Agencies</h4>
        <ul>
          <li>DRDO, BrahMos Aerospace, BDL, BEL</li>
        </ul>
      </div>
    `
  },
  {
    id: 9,
    title: "Cyber Defense",
    description: "Cyber Defence refers to the protection of computer systems, networks, and digital infrastructure from cyber attacks like hacking, data breaches, malware, espionage, and denial-of-service (DoS) attacks.",
    image: "https://images.unsplash.com/photo-1606549000874-1ddeec0ae234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3liZXIlMjBkZWZlbmNlJTIwcmFkYXJ8ZW58MHx8MHx8fDA%3D",
    details: `
      <div style="line-height:1.7">
        <h4>🧱 Core Components of Cyber Defence</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Component</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>Network Security</td><td>Secures government, defense, and military networks using firewalls, VPNs, and secure protocols.</td></tr>
            <tr><td>Endpoint Security</td><td>Protects computers, mobile devices, and servers from malware and unauthorized access.</td></tr>
            <tr><td>Threat Intelligence</td><td>Monitoring global cyber threats, malware databases, and attack signatures in real-time.</td></tr>
            <tr><td>Cyber Forensics</td><td>Identifying, analyzing, and responding to cyber incidents using digital evidence.</td></tr>
            <tr><td>Red Teaming / Blue Teaming</td><td>Simulated attack/defense exercises to test cyber resilience.</td></tr>
            <tr><td>AI-based IDS</td><td>Monitors traffic to detect anomalies and stop attacks instantly.</td></tr>
            <tr><td>Cyber Warfare Capability</td><td>Offensive tools to disable/disrupt enemy digital infrastructure.</td></tr>
          </tbody>
        </table>
        <h4>🇮🇳 India's Cyber Defence Capabilities</h4>
        <ul>
          <li><b>NCIIPC:</b> Protects critical infrastructure, real-time security monitoring.</li>
          <li><b>Defence Cyber Agency (DCA):</b> Cyber warfare capabilities, intelligence, network operations.</li>
          <li><b>CERT-In:</b> Tracks threats, issues alerts, coordinates response, investigates incidents.</li>
          <li><b>Military Cyber Units:</b> Cyber Security Operations Centers, Signal Intelligence Units, training/research.</li>
          <li><b>Cyber Swachhta Kendra:</b> Botnet cleaning, malware removal, free antivirus tools.</li>
          <li><b>NCCC:</b> Real-time threat monitoring, intelligence sharing, 24x7 surveillance.</li>
        </ul>
        <h4>💣 Cyber Warfare Capabilities</h4>
        <table style="width:100%;border-collapse:collapse;margin-bottom:1em">
          <thead>
            <tr><th>Type</th><th>Examples</th></tr>
          </thead>
          <tbody>
            <tr><td>Defensive</td><td>Firewalls, encryption, IDS/IPS, SOCs, cyber drills</td></tr>
            <tr><td>Offensive</td><td>Malware injection, DDoS tools, Zero-day exploit capabilities</td></tr>
            <tr><td>Espionage</td><td>Cyber surveillance on adversaries</td></tr>
            <tr><td>Counter-hacking</td><td>Traceback and neutralization</td></tr>
          </tbody>
        </table>
        <h4>🧠 Cyber Defence Technologies</h4>
        <ul>
          <li>AI & ML, Blockchain, Quantum Cryptography, Zero Trust Architecture, SIEM Tools</li>
        </ul>
        <h4>🎓 Training & Awareness Programs</h4>
        <ul>
          <li>Cyber Surakshit Bharat, I4C, military colleges, private company collaboration</li>
        </ul>
        <h4>🛠️ Real-World Use Cases in Indian Defence</h4>
        <ul>
          <li>Secure Battlefield Communication, Drone/UAV Control, Missile Command Systems, Espionage Prevention, Military Satellites</li>
        </ul>
        <h4>🔐 Challenges in Indian Cyber Defence</h4>
        <ul>
          <li>Constant evolution of threats, shortage of skilled professionals, need for indigenous tools, 5G/IoT security concerns</li>
        </ul>
        <h4>🌐 Global Cyber Defence Collaborations</h4>
        <ul>
          <li>US Cyber Command, Israel’s Unit 8200, France, Japan, Singapore, GFCE</li>
        </ul>
      </div>
    `
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/products" className="text-primary underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          'linear-gradient(120deg, #FF9933 0%, #F3F4F6 50%, #138808 100%)', // slightly darker white
        position: 'relative',
      }}
    >
      {/* Overlay behind card for contrast */}
      <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center pointer-events-none z-5">
        <div className="max-w-xl w-full h-[90%] bg-black/10 rounded-2xl shadow-2xl" />
      </div>
      {/* Animated tricolor waves */}
      <svg
        className="absolute top-0 left-0 w-full h-64 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <path
          d="M0,160 C480,320 960,0 1440,160 L1440,0 L0,0 Z"
          fill="#FF9933"
          fillOpacity="0.12"
        />
        <path
          d="M0,240 C480,80 960,320 1440,160 L1440,0 L0,0 Z"
          fill="#FFFFFF"
          fillOpacity="0.08"
        />
        <path
          d="M0,320 C480,160 960,320 1440,320 L1440,0 L0,0 Z"
          fill="#138808"
          fillOpacity="0.12"
        />
      </svg>
      {/* Ashoka Chakra effect */}
      <svg
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 2, opacity: 0.18 }}
      >
        <circle cx="90" cy="90" r="80" stroke="#1A237E" strokeWidth="8" />
        {[...Array(24)].map((_, i) => (
          <line
            key={i}
            x1="90"
            y1="90"
            x2={90 + 80 * Math.cos((i * 15 * Math.PI) / 180)}
            y2={90 + 80 * Math.sin((i * 15 * Math.PI) / 180)}
            stroke="#1A237E"
            strokeWidth="2"
          />
        ))}
      </svg>
      {/* Floating circles for modern effect */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#FF9933] opacity-10 blur-2xl animate-pulse" style={{ zIndex: 1 }} />
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#138808] opacity-10 blur-2xl animate-pulse" style={{ zIndex: 1 }} />
      <div className="absolute bottom-1/2 left-1/2 w-16 h-16 rounded-full bg-white opacity-5 blur-2xl animate-pulse" style={{ zIndex: 1 }} />
      <div className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 z-10">
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-3xl font-bold mb-4 text-black">{product.title}</h2>
        <p className="text-lg mb-6 text-black">{product.description}</p>
        <div className="text-base mb-8 text-black" dangerouslySetInnerHTML={{ __html: product.details }} />
        <Link to="/products" className="bg-gradient-to-r from-saffron to-orange-600 text-white py-2 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-block">Back to Products</Link>
      </div>
      {/* FAQ Section at the bottom */}
      <div className="relative max-w-xl w-full mt-20 mb-8 z-10 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h3 className="text-2xl font-bold mb-6 text-black">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {(() => {
            switch(product.id) {
              case 1: // Tactical Drone
                return [
                  {q: "Who manufactures tactical drones for India?", a: "Key manufacturers include ideaForge, DRDO, NewSpace Research, and Solar Industries."},
                  {q: "What is the range of SWITCH UAV?", a: "SWITCH UAV has a range of approximately 15 km (Line of Sight)."},
                  {q: "Are Indian tactical drones armed?", a: "Some tactical drones are armed or in development for precision strike roles, such as SWITCH Loitering Munition and ALFA-S."},
                  {q: "Can drones operate at high altitudes?", a: "Yes, models like DRDO Bharat Drone are designed for high-altitude surveillance."}
                ];
              case 2: // Advanced Helmet
                return [
                  {q: "What materials are used in advanced helmets?", a: "Kevlar, UHMWPE, and composite fibers are commonly used for ballistic protection."},
                  {q: "Are these helmets compatible with night vision?", a: "Yes, most modern helmets have mounts for NVGs and other accessories."},
                  {q: "What is the weight of MKU Mukut helmet?", a: "It weighs around 1.2–1.5 kg, much lighter than older steel helmets."},
                  {q: "Do helmets have smart features?", a: "Some prototypes include HUD, biometric monitoring, and AI assistance."}
                ];
              case 3: // Night Vision Optics
                return [
                  {q: "What types of night vision devices are used?", a: "Monocular NVGs, weapon sights, and thermal imaging devices are widely used."},
                  {q: "What is the difference between Gen II and Gen III night vision?", a: "Gen III offers higher resolution and auto-brightness, used by elite units."},
                  {q: "Can night vision work in total darkness?", a: "Thermal imaging devices can operate in complete darkness by detecting heat."},
                  {q: "Are there indigenous night vision devices?", a: "Yes, DRDO, BEL, and MKU Ltd. manufacture indigenous NV devices."}
                ];
              case 4: // Combat Vest
                return [
                  {q: "What protection levels do combat vests offer?", a: "Indian vests range from NIJ Level IIIA to Level IV, stopping various threats."},
                  {q: "What gear can be carried in a combat vest?", a: "Vests carry magazines, grenades, med kits, radios, hydration packs, and more."},
                  {q: "Are smart vests available?", a: "Smart vests with sensors, GPS, and cameras are under development."},
                  {q: "Who manufactures combat vests in India?", a: "MKU Ltd, DRDO, TATA Advanced Systems, and others supply vests to forces."}
                ];
              case 5: // Tactical Radio
                return [
                  {q: "What is a tactical radio used for?", a: "Tactical radios provide secure, real-time communication and data sharing on the battlefield."},
                  {q: "Are Indian radios encrypted?", a: "Yes, radios like BEL SDR use AES-256 encryption and frequency hopping."},
                  {q: "What is the range of handheld tactical radios?", a: "Handheld radios typically have a range of 1–5 km."},
                  {q: "Who manufactures tactical radios in India?", a: "BEL, DRDO, TATA Advanced Systems, and HAL are key manufacturers."}
                ];
              case 6: // Defense Radar
                return [
                  {q: "What is the role of defense radars?", a: "Radars detect, track, and classify objects for surveillance, air defense, and fire control."},
                  {q: "What is the range of Swordfish radar?", a: "Swordfish radar can track targets at ranges over 600 km."},
                  {q: "Are Indian radars indigenous?", a: "Many radars are developed by DRDO and BEL, with some imported systems."},
                  {q: "What types of radars are used?", a: "Surveillance, tracking, fire-control, weather, and multifunction radars are used."}
                ];
              case 7: // Armored Vehicle
                return [
                  {q: "What types of armored vehicles are in service?", a: "India operates MBTs, IFVs, APCs, MRAPs, and self-propelled artillery."},
                  {q: "Who manufactures Indian armored vehicles?", a: "DRDO, TATA, Kalyani, and others manufacture and supply vehicles."},
                  {q: "Do vehicles have advanced tech?", a: "Modern vehicles feature BMS, RWS, APS, and night vision systems."},
                  {q: "Where are these vehicles deployed?", a: "Vehicles are deployed in deserts, borders, high-altitude, and urban combat zones."}
                ];
              case 8: // Missile System
                return [
                  {q: "What types of missiles does India have?", a: "India has ballistic, cruise, air-to-air, surface-to-air, anti-tank, and hypersonic missiles."},
                  {q: "Who develops Indian missile systems?", a: "DRDO, ISRO, BrahMos Aerospace, and BDL are key agencies."},
                  {q: "What is the range of Agni-V missile?", a: "Agni-V has a range of over 5,000 km."},
                  {q: "Are Indian missiles exported?", a: "BrahMos and other systems are exported to friendly nations."}
                ];
              case 9: // Cyber Defense
                return [
                  {q: "What is cyber defense?", a: "Cyber defense protects digital infrastructure from attacks, breaches, and espionage."},
                  {q: "Who manages cyber defense in India?", a: "NCIIPC, DCA, CERT-In, and military cyber units manage defense."},
                  {q: "What technologies are used?", a: "AI, blockchain, quantum cryptography, and zero trust architectures are used."},
                  {q: "Are there training programs?", a: "Yes, Cyber Surakshit Bharat, I4C, and military colleges offer training."}
                ];
              default:
                return [];
            }
          })().map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold text-black mb-2">Q: {faq.q}</h4>
              <p className="text-base text-gray-700">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
