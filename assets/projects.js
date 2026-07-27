/**
 * Shared, curated project data for both design directions.
 * Narrative copy (challenge / move / outcome / bullets) was written from the
 * Notion overviews and is meant to be reviewed and fact-corrected by Edison.
 * Images are local copies under assets/projects/<slug>/.
 */
window.FILTER_DEFS = [
  { id: "all", label: "All" },
  { id: "industry", label: "Industry" },
  { id: "fsae", label: "Penn Electric" },
  { id: "research", label: "Research" },
  { id: "academic", label: "Coursework" }
];

window.PROJECT_DATA = [
  {
    id: "vast-haven2-solar",
    domain: "industry",
    label: "Vast · Haven-2",
    title: "Haven-2 Solar",
    snippet: "Solar array hardware for Vast's Haven-2 commercial space station.",
    summary:
      "Currently developing solar array hardware for Vast's Haven-2 commercial space station — the mechanical side of moving power-generation hardware from concept toward flight-credible design.",
    impact: "Haven-2 power generation",
    role: "Mechanical design",
    phase: "In progress",
    timeframe: "2026",
    status: "In progress",
    challenge:
      "Space-station solar hardware has to be light, deployable, and survivable while staying realistic to manufacture and integrate.",
    move:
      "Focusing on the structural and interface design of the array hardware, keeping the packaging honest about assembly, loads, and integration from the very start.",
    outcome:
      "Work in progress — building the mechanical foundations for Haven-2's solar power system.",
    bullets: [
      "Designing mechanical hardware for the Haven-2 solar array.",
      "Balancing mass, deployment, and survivability against manufacturability."
    ],
    tools: ["CAD", "Structural design", "Mechanism design", "Spaceflight hardware"],
    images: [
      "assets/projects/vast-haven-2-solar/Vast_Haven-2_Full_Configuration_V1.jpg",
      "assets/projects/vast-haven-2-solar/01.jpg",
      "assets/projects/vast-haven-2-solar/00.png"
    ],
    link: "https://edison-engineering-portfolio.notion.site/Vast-Haven-2-Solar-3847912b590c802d9169f5712b0d896c"
  },
  {
    id: "spacex-starlink",
    domain: "industry",
    label: "SpaceX · Starlink",
    title: "Starlink Test Hardware",
    snippet: "Vibration, solar-deploy, and pressure-test hardware for Starlink campaigns.",
    summary:
      "On the Starlink team at SpaceX, I designed and drove fabrication of test hardware across three fronts — vibration fixtures, solar-deploy hardware, and pressure-test setups — built to behave the same on the test floor as they do in CAD.",
    impact: "Lab-credible test hardware",
    role: "Fixture design + supplier coordination",
    phase: "Design → fabrication",
    timeframe: "2025",
    status: "Completed",
    challenge:
      "Test hardware has to survive real loads and harsh setups without becoming overbuilt, hard to machine, or fragile once it leaves CAD and reaches the floor.",
    move:
      "I worked from the critical load paths and interface geometry outward, leaning on tolerance discipline and direct supplier coordination so the hardware stayed both precise and practical to build.",
    outcome:
      "Delivered vibration, solar-deploy, and pressure-test hardware shaped around how each campaign actually runs, rather than generic parts that merely fit the table.",
    bullets: [
      "Designed vibration fixtures around real Starlink test interfaces.",
      "Built solar-deploy hardware for repeated on-the-ground deployment testing.",
      "Developed pressure-testing hardware for recurring qualification work."
    ],
    tools: ["Fixture design", "GD&T", "Vibration test", "Supplier coordination"],
    images: [
      "assets/projects/spacex-starlink/00.jpg",
      "assets/projects/spacex-starlink/01.jpg"
    ],
    link: "https://edison-engineering-portfolio.notion.site/SpaceX-Starlink-2467912b590c804c90aacf33005f328e"
  },

  {
    id: "mechatronics-robot",
    domain: "academic",
    label: "Mechatronics · Autonomous Robot",
    title: "Autonomous Mechatronics Robot",
    snippet: "A two-wheel-drive robot that senses its surroundings and works its way through a competition arena on its own.",
    summary:
      "A custom robot I designed, built, and programmed to run a competition arena entirely on its own. The two-wheel-drive chassis carries its own microcontroller, motor driver, and sensors, and the control logic turns live readings from the course into steering and speed decisions in real time.",
    impact: "Fully autonomous arena runs",
    role: "Mechatronics design + firmware",
    phase: "Build → program → compete",
    timeframe: "2024",
    status: "Completed",
    challenge:
      "Fit sensing, drive, and decision-making onto one small platform and make it reliable enough to read the course and get through it without any human input.",
    move:
      "I built the drivetrain and electronics around a compact two-wheel-drive chassis, then wrote control logic that converts live sensor data into on-the-fly steering and speed decisions.",
    outcome:
      "A self-contained robot that perceives its environment and drives the arena autonomously — no remote control involved.",
    bullets: [
      "Built a two-wheel-drive chassis with an onboard microcontroller and motor driver.",
      "Integrated sensors for real-time perception of the course.",
      "Wrote control logic to sense and react within the arena autonomously."
    ],
    tools: ["Microcontroller", "Motor driver", "Sensors", "Control logic"],
    images: [
      "assets/projects/mechatronics-robot/01.jpeg",
      "assets/projects/mechatronics-robot/00.png"
    ]
  },

  {
    id: "revx-chassis",
    domain: "fsae",
    label: "Penn Electric · REVX",
    title: "REVX Chassis, Jig + Tabs",
    snippet: "Design-Finals chassis validated in ANSYS and on a torsion rig — plus the jig and tabs that build it.",
    summary:
      "As part of Penn Electric Racing, I led chassis design for REVX in collaboration with every mechanical sub-team — optimizing for minimum weight, sound torsional stiffness, clean hardpoints, and integration of every component no matter how small. I also led the manufacturing side: a revamped steel chassis jig plus the tabs and tab jigs the team uses to locate every component on the frame.",
    impact: "Reached Design Finals",
    role: "Chassis + manufacturing lead",
    phase: "Design → validate → manufacture",
    timeframe: "2024",
    status: "Completed",
    challenge:
      "The chassis had to get lighter and stiffer while genuinely accounting for how suspension, packaging, and every sub-team's hardware integrate into one frame — and past years suffered from inaccurate jigging and tab placement that caused manufacturing delays and integration errors.",
    move:
      "I paired the design with lateral-load-transfer and torsional-stiffness study in ANSYS, then validated it physically on a torsion rig. To fix the build side, I introduced a new steel chassis jig and tab-jigging methods built around repeatable, tight tolerances.",
    outcome:
      "A lighter, well-integrated chassis that reached Design Finals and validated closely against the ANSYS model on the rig — plus repeatable chassis and tab manufacturing that removed a long-standing bottleneck.",
    bullets: [
      "Led REVX chassis design across all mechanical sub-teams.",
      "Ran torsional-stiffness and load-transfer analysis in ANSYS, validated on a purpose-built torsion rig.",
      "Reached Design Finals.",
      "Designed a revamped steel chassis jig and the tabs/tab-jigs that locate every component on the frame.",
      "Targeted repeatable tolerances to remove a key manufacturing bottleneck."
    ],
    tools: ["SOLIDWORKS", "ANSYS", "Torsion rig", "Steel jig design", "Tolerancing"],
    images: [
      "assets/projects/revx-chassis-fsae-ansys-structural-analysis/02.jpg",
      "assets/projects/revx-chassis-fsae-ansys-structural-analysis/00.png",
      "assets/projects/revx-chassis-fsae-ansys-structural-analysis/01.jpg",
      "assets/projects/revx-chassis-fsae-ansys-structural-analysis/03.png",
      "assets/projects/revx-jigging-and-tabs/00.png",
      "assets/projects/revx-jigging-and-tabs/01.png"
    ],
    link: "https://edison-engineering-portfolio.notion.site/REVX-Chassis-FSAE-ANSYS-Structural-Analysis-319d03bc4dc4425c9a0ede3e6ef71650"
  },
  {
    id: "pcm-enclosure",
    domain: "fsae",
    label: "Penn Electric · Packaging",
    title: "PCM Enclosure",
    snippet: "~50% smaller, IP67-sealed electronics housing with a custom board latch.",
    summary:
      "Working closely with the electrical sub-team, I designed the enclosure housing Penn Electric Racing's PCM, PDU, and connector boards — roughly 50% smaller than the prior year's, sealed to IP67, and engineered so the boards never move.",
    impact: "~50% smaller, IP67",
    role: "Mechanical design + EE integration",
    phase: "Design for manufacture",
    timeframe: "2024",
    status: "Completed",
    challenge:
      "Shrink the enclosure dramatically while keeping it waterproof for the rain test and absolutely preventing the board movement that had shut the car off mid-corner in past years.",
    move:
      "I drove the packaging as a system problem — coordinating constantly with EE on board layout, researching sealing for IP67, and designing a custom latch to lock the boards since nothing on the market fit.",
    outcome:
      "A nearly 50% smaller, IP67-rated enclosure with a custom internal latch that kept the boards connected through hard cornering.",
    bullets: [
      "Cut enclosure volume by nearly 50% versus the prior design.",
      "Sealed to IP67 for the competition rain test.",
      "Designed a custom latch to eliminate board movement.",
      "Coordinated layout directly with the electrical team."
    ],
    tools: ["SOLIDWORKS", "DFM", "IP67 sealing", "EE integration"],
    images: [
      "assets/projects/pcm-enclosure/01.png",
      "assets/projects/pcm-enclosure/02.png",
      "assets/projects/pcm-enclosure/00.jpg"
    ],
    link: "https://edison-engineering-portfolio.notion.site/PCM-Enclosure-56792af9ccb14af58ec583208dd72245"
  },

  {
    id: "tshirt-launcher",
    domain: "academic",
    label: "Build · Pneumatics",
    title: "Pneumatic T-Shirt Launcher",
    snippet: "A cart-mounted, multi-barrel pneumatic launcher that fires t-shirts into a crowd — safely and repeatably.",
    summary:
      "A pneumatic t-shirt launcher built on a rolling cart for crowd events. Compressed-air reservoirs feed a multi-barrel launch assembly on an adjustable-angle frame, with electronic firing controls tuned so every shot is safe and repeatable.",
    impact: "Crowd-ready launcher",
    role: "Mechanical design + build",
    phase: "Design → build",
    timeframe: "2024",
    status: "Completed",
    challenge:
      "Store and release compressed air powerfully enough to launch shirts across a crowd, while keeping the system safe, aimable, and consistent shot to shot.",
    move:
      "I packaged air reservoirs, a multi-barrel launch assembly, and an adjustable-angle frame onto a mobile cart, then wired electronic firing controls so each launch is deliberate and repeatable.",
    outcome:
      "A mobile, multi-barrel launcher that sends t-shirts into a crowd on demand, with repeatable aim and firing.",
    bullets: [
      "Designed a cart-mounted, multi-barrel pneumatic launch assembly.",
      "Fed the barrels from compressed-air reservoirs on an adjustable-angle frame.",
      "Added electronic firing controls for safe, repeatable launches."
    ],
    tools: ["Pneumatics", "Compressed air", "Fabrication", "Firing controls"],
    images: ["assets/projects/tshirt-launcher/00.png"]
  },

  {
    id: "lustr-spiral-zipper",
    domain: "research",
    label: "GRASP Lab · NASA LuSTR",
    title: "Spiral Zipper Docking Hardware",
    snippet: "Rover mechanism and docking hardware for NASA's lunar terrain research.",
    summary:
      "At Penn's ModLab (GRASP Lab), I designed and built mechanism hardware for NASA's Lunar Surface Technology Research project — robots that attach to each other to cross hazardous lunar terrain, then separate to continue their own missions.",
    impact: "Fieldable rover hardware",
    role: "Research assistant + mechanism design",
    phase: "Prototype",
    timeframe: "2024",
    status: "Completed",
    challenge:
      "The mechanisms had to manipulate custom spiral zippers and dock one rover to another reliably enough that a failure in the field wouldn't strand the system.",
    move:
      "I designed for manufacturability from the start and built the docking behavior around repeatable latching rather than optimistic one-shot alignment.",
    outcome:
      "Mounting and docking hardware that's better suited to production and far more credible for real rover-to-rover interaction.",
    bullets: [
      "Designed a mount to manipulate custom rover spiral zippers.",
      "Built a docking component for rover-to-rover latching.",
      "Improved manufacturability to support faster production."
    ],
    tools: ["Mechanism design", "CAD", "Prototyping", "Robotics"],
    images: [
      "assets/projects/spiral-zipper-manipulation-mounting-nasa-lustr-p/02-clean.jpg",
      "assets/projects/spiral-zipper-manipulation-mounting-nasa-lustr-p/00.jpg",
      "assets/projects/spiral-zipper-manipulation-mounting-nasa-lustr-p/01.png",
      "assets/projects/spiral-zipper-manipulation-mounting-nasa-lustr-p/03.png"
    ],
    link: "https://edison-engineering-portfolio.notion.site/Spiral-Zipper-Manipulation-Mounting-NASA-LuSTR-Project-ModLab-0b4c8d52bb31415f9f45e555d7529c40"
  },
  {
    id: "stirling-engine",
    domain: "academic",
    label: "MEAM 2010 · Craft",
    title: "Stirling Engine",
    snippet: "A running Stirling engine made to be genuinely beautiful — and to spin past 1100 RPM.",
    summary:
      "For MEAM 2010, a design-and-manufacture course at Penn, I designed and machined a working Stirling engine — and used it as an excuse to make something genuinely beautiful, with a flywheel inspired by aftermarket Toyota Supra wheels.",
    impact: "1100+ RPM, finished build",
    role: "Design + manufacture",
    phase: "Design → machine",
    timeframe: "2024",
    status: "Completed",
    challenge:
      "Design and manufacture a running Stirling engine from part drawings and my own specs, holding tight tolerances while making it look refined.",
    move:
      "I modeled every part in SOLIDWORKS, balanced the assembly via center-of-mass before cutting metal, and chose finishes deliberately — sandblasted flywheel, brushed bedplate, stained wood base.",
    outcome:
      "A running engine that spun past 1100 RPM, with the considered, finished look I was after.",
    bullets: [
      "Designed every part in SOLIDWORKS and balanced via center-of-mass.",
      "Machined on mills and lathes to tight tolerances.",
      "Supra-inspired flywheel with deliberate mixed finishes.",
      "Ran past 1100+ RPM."
    ],
    tools: ["SOLIDWORKS", "Manual mill", "Lathe", "Finishing"],
    images: [
      "assets/projects/stirling-engine-meam-2010-project/01.jpg",
      "assets/projects/stirling-engine-meam-2010-project/03.jpg",
      "assets/projects/stirling-engine-meam-2010-project/00.jpg",
      "assets/projects/stirling-engine-meam-2010-project/02.jpg"
    ],
    link: "https://edison-engineering-portfolio.notion.site/Stirling-Engine-MEAM-2010-Project-e1ababf9b6a3495a9b46ec0a15487c79"
  },
  {
    id: "carbon-fiber",
    domain: "fsae",
    label: "Penn Electric · Composites",
    title: "Carbon Fiber Layups + Bodywork",
    snippet: "Hands-on composites and bodywork fitting, from nose cone to body panels.",
    summary:
      "Across my time on Penn Electric Racing I learned to do carbon-fiber layups and fit bodywork to the car — from the REVX nose cone to REV9 body panels — the hands-on manufacturing that turns a chassis into a car.",
    impact: "Race-car bodywork",
    role: "Composites + bodywork",
    phase: "Manufacture",
    timeframe: "2024",
    status: "Completed",
    challenge:
      "Produce clean composite parts and fit bodywork accurately to the chassis, where surface quality and fit are immediately visible.",
    move:
      "I worked through the full layup and finishing process and dialed in panel fitment against the real chassis geometry.",
    outcome:
      "Carbon parts and bodywork that fit the car and look the part — and a deeper love for making things by hand.",
    bullets: [
      "Performed carbon-fiber layups for vehicle parts.",
      "Fit bodywork including the REVX nose cone and REV9 panels.",
      "Owned surface quality and fitment against the chassis."
    ],
    tools: ["Carbon layup", "Composites", "Bodywork", "Finishing"],
    images: [
      "assets/projects/carbon-fiber-layups-bodywork-fitting/00.jpg",
      "assets/projects/carbon-fiber-layups-bodywork-fitting/02.jpg",
      "assets/projects/carbon-fiber-layups-bodywork-fitting/01.png"
    ],
    link: "https://edison-engineering-portfolio.notion.site/Carbon-Fiber-Layups-Bodywork-Fitting-f8354fe5fb10487dac94129ee6490501"
  }
];
