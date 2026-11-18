import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/Work3.png";
import Work4 from "../../assets/Work4.png";
import Work5 from "../../assets/Work5.png";
import Work6 from "../../assets/Work6.png";
import Work7 from "../../assets/Work7.png";
import Work8 from "../../assets/Work8.png";
import Work9 from "../../assets/Work9.png";
import Work10 from "../../assets/Work10.png";
import Work11 from "../../assets/Work11.png";
import Work12 from "../../assets/Work12.png";
import Work13 from "../../assets/Work13.png";
import Work14 from "../../assets/Work14.png";
import Work15 from "../../assets/Work15.png";
import Work16 from "../../assets/Work16.png";
import report from "../../assets/Technical_report_Temporun.pdf";
import dashboardPdf from "../../assets/AIV dashboard.pdf";
import cyclisticImg from "../../assets/cyclistic_case_study.png";
import cyclisticPdf from "../../assets/Huynh Viet Tien _ CASE Study Cyclistic.pdf";
import iucnImg from "../../assets/projectPic/IUCN.png";
import reportPdf from "../../assets/REPORT.pdf";
import AisessImg from "../../assets/interviewerAisess.png";
import wisStudio from "../../assets/projectPic/wistudi/xp-studio.webp";
import wisPlayer from "../../assets/projectPic/wistudi/xp-player.webp";
import wisAnalysis from "../../assets/projectPic/wistudi/xp-analysis.webp";
import wisCheckpoint from "../../assets/projectPic/wistudi/xp-checkpoint.webp";
import wisXpQuiz from "../../assets/projectPic/wistudi/xp-quiz.webp";
import wisXpOptions from "../../assets/projectPic/wistudi/xp-options.webp";
import wisXpClip from "../../assets/projectPic/wistudi/xp-clip.webm";
import wisUpload from "../../assets/projectPic/wistudi/flow-upload.webp";
import wisSettings from "../../assets/projectPic/wistudi/flow-settings.webp";
import wisOutline from "../../assets/projectPic/wistudi/flow-outline.webp";
import wisFlowChat from "../../assets/projectPic/wistudi/flow-chat.webp";
import wisFlowQuiz from "../../assets/projectPic/wistudi/flow-quiz.webp";
import wisIllustrate from "../../assets/projectPic/wistudi/flow-illustrate.webp";
import wisArt from "../../assets/projectPic/wistudi/flow-art.webp";
import wisAgenda from "../../assets/projectPic/wistudi/flow-agenda.webp";
import wisComplete from "../../assets/projectPic/wistudi/flow-complete.webp";
import wisImageGen from "../../assets/projectPic/wistudi/flow-imagegen.webp";
import wisFlowClip from "../../assets/projectPic/wistudi/flow-clip.webm";
import phyDashboard from "../../assets/projectPic/physics/dashboard.webp";
import phyReplay from "../../assets/projectPic/physics/replay.webp";
import phyEnvironment from "../../assets/projectPic/physics/environment.webp";
import phyAnymal from "../../assets/projectPic/physics/robot-anymal.webp";
import phyGo2 from "../../assets/projectPic/physics/robot-go2.webp";
import phyLaunch from "../../assets/projectPic/physics/launch.webp";
import phyResults from "../../assets/projectPic/physics/results.webp";
import phyScene from "../../assets/projectPic/physics/scene-map.webp";
import phySystem from "../../assets/projectPic/physics/system.webp";
import phyCard from "../../assets/projectPic/physics/isaac-card.webp";
import surCover from "../../assets/projectPic/surgical/cover.webp";
import surPoster from "../../assets/projectPic/surgical/poster.webp";
import surClip from "../../assets/projectPic/surgical/report.mp4";
import surReport from "../../assets/projectPic/surgical/report.pdf";
import surInverse from "../../assets/projectPic/surgical/stage1-inverse.webp";
import surPolicy from "../../assets/projectPic/surgical/stage2-policy.webp";
import surForward from "../../assets/projectPic/surgical/stage3-forward.webp";
import surSim from "../../assets/projectPic/surgical/stage4-sim.webp";
import surModels from "../../assets/projectPic/surgical/models.webp";
import surLatency from "../../assets/projectPic/surgical/latency.webp";
import surStudioSim from "../../assets/projectPic/surgical/studio-sim.webp";
import surStudioInverse from "../../assets/projectPic/surgical/studio-inverse.webp";
import surStudioForward from "../../assets/projectPic/surgical/studio-forward.webp";



export const projectsData = [
    {
        id: 23,
        image: surCover,
        title: "AI| Surgical Robot Pipeline - Cosmos3-H World Model on NVIDIA GB300",
        category: ['AI', 'application'],
        link: surReport,
        video: surClip,
        description: "A four-stage pipeline for the dVRK surgical robot, built into NTC Physics Studio. One world model, NVIDIA Cosmos3-H-Embodied-Nano (16B parameters), reads both arms' motion from recorded endoscopic video, proposes the next motion, and forecasts the video; a virtual dVRK in Isaac Lab 3.0 then replays the motion in a simulated operating room, so it can be tested without the real robot.",
        techstack: "NVIDIA Cosmos3-H-Embodied-Nano, Isaac Lab 3.0, Newton, MuJoCo-Warp, URDF, USD, PyTorch, Docker, NVIDIA GB300, Python",
        overview: {
            tagline: "Can an AI that only watches endoscopic video understand what the surgical robot is doing? One world model reads it, plans it and predicts it; a virtual robot replays it.",
            role: "AI Engineer at NTC AI: built the four-stage pipeline, the benchmark and the report",
            year: "2026",
            problem: "Surgical robot research has hours of recorded endoscopic video but rarely the joint data behind it, and every new idea about how the robot should move is hard to try: running the real dVRK is slow, costly and needs a supervised, safe setup.",
            idea: "Use one world model for every AI step. Cosmos3-H-Embodied-Nano runs in three modes on the same weights: inverse reads the arms' motion from video, policy proposes the next motion, forward predicts the video. A virtual dVRK built from URDF, in a hospital room built from USD, then replays the motion in Isaac Lab and reports reach, collisions and how far it pushes the tissue.",
            pipeline: {
                caption: "Recorded video in, a virtual robot replaying it out. Every stage is a job on the GB300, run from the Studio.",
                inputs: [
                    { id: "video", kind: "Data", title: "Recorded video", steps: ["Open-H, Hamlyn dVRK", "12 cases, 5 tasks", "2.4 s clips, 10 fps"] },
                    { id: "robot", kind: "Robot", title: "Virtual dVRK", steps: ["psm_classic_lnd.urdf", "6 arm joints + gripper", "hospital.usd, tissue phantom"] },
                ],
                stages: [
                    { id: "inverse", title: "1. Label from video", detail: "Cosmos3-H, inverse mode: 25 endoscope frames in, 24 steps × 2 arms of tool-tip pose and gripper angle out." },
                    { id: "policy", title: "2. Decide", detail: "Cosmos3-H, policy mode: the frame at t, both arms' pose and an instruction such as \"pass the needle to the other hand\" in, the next motion out." },
                    { id: "forward", title: "3. Forecast video", detail: "Cosmos3-H, forward mode: the first frame and the recorded motion in, 25 generated endoscope frames out." },
                    { id: "sim", title: "4. Simulate", detail: "Isaac Lab 3.0 on Newton (MuJoCo-Warp, 120 Hz): two virtual dVRK arms replay the motion read in stage 1.", guard: "Each clip restarts from the recorded state; out-of-reach commands, collisions and tissue displacement are logged." },
                ],
                outputs: [
                    { id: "csv", title: "Motion CSV", detail: "24 steps × 2 arms per clip: position in mm, orientation quaternion, gripper in rad." },
                    { id: "mp4", title: "Forecast video", detail: "Generated endoscope clips side by side with the recording." },
                    { id: "simvid", title: "Simulation videos", detail: "Virtual endoscope, full room and recording side by side, plus commanded vs. reached logs." },
                ],
            },
            flows: [
                {
                    name: "Four stages on one case",
                    tone: "orange",
                    clip: surClip,
                    poster: surPoster,
                    clipCaption: "The video report: the Studio running all four stages on recorded dVRK cases (narrated in Vietnamese).",
                    summary: "Hamlyn dVRK knot tying (knot_tying_ep29), clip 1 of 5, through every stage.",
                    steps: [
                        { title: "Label from video", image: surInverse, text: "Solid lines are the real tool tips, dashed lines the model's reading. Across 52 clips the model stays within 1.56 mm on average of the recording, and under 2.36 mm even at the end of the 2.4 s clip." },
                        { title: "Decide", image: surPolicy, text: "From the current frame alone the model proposes the next motion. It is harder: 8.19 mm on average, and here the right arm heads up while the recording goes sideways. It only beats holding the pose still after 0.6 s." },
                        { title: "Forecast video", image: surForward, text: "Left the recording, right the model's video from the first frame and the recorded motion: PSNR 31.6 dB and SSIM 0.930, drifting from 34.7 dB at 0.1 s to 29.9 dB at 2.4 s." },
                        { title: "Simulate", image: surSim, text: "The recording, a virtual endoscope placed where the real camera was, and the full hospital room. The virtual arms reach their commands within 0.45 mm on average; the tissue was pushed more than 1 mm in 7 of 52 clips." },
                    ],
                },
                {
                    name: "Why one model",
                    tone: "blue",
                    summary: "NVIDIA ships three models for surgical robots; only one covers all three AI stages.",
                    steps: [
                        { title: "Compare", image: surModels, text: "Cosmos3-H (16B) reads motion, proposes motion and forecasts video. GR00T-H (3B) only proposes; Cosmos-H (2B) only forecasts. Pairing the two still leaves no way to label motion from video." },
                        { title: "Cost of a second of output", image: surLatency, text: "Cosmos3-H needs about 30 GB of GPU memory and 1.6 to 1.8 s per second of output, versus 6.4 to 10.5 s for Cosmos-H. The trade: more memory, slower than real time, but one model for the whole loop." },
                    ],
                },
            ],
            highlights: [
                { title: "Measured, not demoed", text: "Every number comes from the run's downloadable bundle: per-step error in mm against the recording for 1,248 steps per arm, PSNR and SSIM for video, commanded vs. reached for the simulation." },
                { title: "An honest baseline", text: "Policy output is compared against simply holding the pose still. It loses until 0.6 s, a result the report states plainly rather than hides." },
                { title: "Repeatable", text: "Re-running with the same seed reproduces labelling exactly (2,496 of 2,496 steps) and the simulation to within 0.05 mm." },
                { title: "Run on a shared GB300", text: "Each Cosmos3-H job used 23–39 % of SMs and at most 31.9 GiB of VRAM next to vLLM and ComfyUI; the report logs incidents such as NVML loss and an RTX/DLSS render failure, and the workarounds." },
            ],
            facts: [
                { value: "4", label: "pipeline stages, three on one model" },
                { value: "52", label: "2.4 s clips from 12 dVRK cases" },
                { value: "1.56", label: "mm mean error labelling motion from video" },
                { value: "0.930", label: "SSIM of the forecast video" },
                { value: "0.45", label: "mm mean commanded vs. reached in simulation" },
            ],
            gallery: [
                { image: surStudioSim, size: "wide", caption: "The Studio: recording, virtual endoscope and the dVRK in the hospital room." },
                { image: surSim, size: "wide", caption: "Stage 4 in Isaac Lab: the virtual dVRK replays motion read from video." },
                { image: surStudioInverse, caption: "Stage 1 in the Studio: real vs. model trajectories." },
                { image: surStudioForward, caption: "Stage 3 in the Studio: recorded vs. forecast video." },
                { image: surModels, caption: "Which NVIDIA model covers which stage." },
                { image: surLatency, caption: "Time to produce one second of output." },
            ],
        },
    },
    {
        id: 22,
        image: phyReplay,
        title: "AI| NTC Physics Studio - Robot Learning on NVIDIA DGX Spark",
        category: ['AI', 'application', 'web'],
        link: "https://labs.ntc.ai.vn/isaac-lab/",
        description: "A turnkey robot-learning station on one NVIDIA DGX Spark. Isaac Lab 3 (Newton physics) trains reinforcement-learning policies headless in Docker, and a web app on the LAN lets anyone pick a task, a robot and an environment, train, watch the robot learn, read a final assessment, try the policy and download it as PyTorch, ONNX or a ROS 2 bundle.",
        techstack: "NVIDIA Isaac Lab 3, Newton physics, RSL-RL PPO, PyTorch, ONNX, ROS 2 Jazzy, MuJoCo, Docker, Python, three.js",
        overview: {
            tagline: "Pick a robot, a task and a room. The Spark trains a policy, grades it like an examiner and hands you a model ready for ROS 2.",
            role: "AI Engineer at NTC AI: built the training pipeline, assessment and web app",
            year: "2026",
            problem: "Training a robot skill with reinforcement learning normally means a workstation full of scripts, a physics simulator to set up, robot models to rig, and no clear way to tell whether the result is good enough to put on hardware. Most of the people who need a trained skill never get that far.",
            idea: "One NVIDIA DGX Spark on the local network becomes a robot-learning station. The browser chooses the task, the robot and the environment; one GPU job runs at a time under memory, temperature and shared-GPU guards; every run ends with an assessment that says what the robot learned, what to fix, and a model to download.",
            pipeline: {
                caption: "From a choice in the browser to a deployable policy. Every arrow is a job the worker runs on the Spark.",
                inputs: [
                    { id: "robot", kind: "Robot", title: "Robot library", steps: ["URDF / MJCF", "rig: feet, standing pose, motor gains", "stand test"] },
                    { id: "env", kind: "Environment", title: "Environment builder", steps: ["3D scan, floor plan, ROS map or NVIDIA scene", "occupancy map", "collision scene"] },
                    { id: "task", kind: "Task", title: "Task", steps: ["walk flat / rough", "go to goal", "navigate a room", "depth-camera navigation"] },
                ],
                stages: [
                    { id: "queue", title: "Job queue", detail: "One GPU job at a time, plus short side jobs: scene builds, stand tests, assessments, trials.", guard: "Guarded run: pauses at GPU 85 °C or board 95 °C, watches unified memory and yields a shared GPU." },
                    { id: "train", title: "Train headless", detail: "Isaac Lab 3 on Newton physics, kit-less in Docker. PPO (RSL-RL) learns the policy; reward curve and milestones stream to the dashboard." },
                    { id: "assess", title: "Final assessment", detail: "Evaluation rollouts with gait measures and stress tests: velocity error, falls, foot contacts, air time, then a pass level and a diagnosis of what to fix." },
                ],
                outputs: [
                    { id: "replay", title: "3D replay", detail: "An interactive recording of the trained robot, plus trials under conditions you choose." },
                    { id: "onnx", title: "PyTorch + ONNX", detail: "Checkpoint and ONNX export; an inference service serves policies over HTTP on the CPU." },
                    { id: "ros", title: "ROS 2 bundle", detail: "ROS 2 Jazzy policy node with a MuJoCo sim2sim check before hardware." },
                ],
            },
            flows: [
                {
                    name: "Training run",
                    tone: "green",
                    summary: "A real run on the Spark: Apptronik Apollo, a 1.74 m humanoid, learning to walk on flat ground.",
                    steps: [
                        { title: "Launch", image: phyLaunch, text: "Choose a task from eight, from a quick machine check to depth-camera navigation, then a robot that is set up for it and, for navigation, an environment." },
                        { title: "Watch it learn", image: phyDashboard, text: "A run reads like a lab notebook: the reward curve against earlier runs, notes at the iterations where something happened, and the machine's temperature, memory and power beside it. This Apollo run took 1,500 iterations in 1 h 9 min; mean reward rose from 0.13 to 24.57." },
                        { title: "Read the verdict", image: phyResults, text: "Velocity error 0.14 m/s against a pass level of 0.30, reached from iteration 516. The assessment still flags what to fix: the robot drifts 0.09 m/s when told to stand still, and both feet leave the ground 12.3 % of the time." },
                        { title: "Replay and try", image: phyReplay, text: "The evaluation is saved as an interactive 3D scene: orbit, zoom and scrub the trained robot, or run trials with commands you choose." },
                    ],
                },
                {
                    name: "Robots and rooms",
                    tone: "green",
                    summary: "Assets the training needs, prepared in the same app instead of by hand.",
                    steps: [
                        { title: "Robot library", image: phyGo2, text: "Thirteen robots with permissive licences: quadrupeds (Unitree Go2, B2, ANYmal C and D, Spot), humanoids (Unitree G1 and H1, Booster T1, Apptronik Apollo, Fourier N1) and the Franka arm, each viewable in 3D." },
                        { title: "Set up for training", image: phyAnymal, text: "Feet, standing pose and motor gains are rigged from the URDF or MJCF and checked with a stand test before a single training run is spent." },
                        { title: "Environments", image: phyEnvironment, text: "NVIDIA scenes and real NuRec captures (warehouse, office, café, living room), or your own room from a 3D scan, floor plan or ROS map." },
                        { title: "Collision map", image: phyScene, text: "Each environment is turned into an occupancy map and collision scene; the empty warehouse gives 563 m² of walkable floor and 4,096 start and goal points at least 0.6 m from obstacles." },
                    ],
                },
            ],
            highlights: [
                { title: "Graded, not just trained", text: "Every run ends with an assessment: measured gait, stress tests, a pass level, and plain-language findings with the fix, such as rewarding standing still when the command is zero." },
                { title: "Safe on a shared machine", text: "A guarded run watches GPU and board temperature, unified memory and other projects on the GPU, and pauses rather than crashing the Spark." },
                { title: "Sim to real path", text: "Policies leave as ONNX and as a ROS 2 Jazzy node, with a MuJoCo sim2sim check so a policy is tested in a second physics engine before hardware." },
                { title: "Usable by non-specialists", text: "A Vietnamese-first interface with English, a guided tour, and words instead of jargon; the advanced panel keeps loss, sim speed, config and commands for engineers." },
            ],
            facts: [
                { value: "8", label: "training tasks, from balance to depth-camera navigation" },
                { value: "13", label: "robots in the library" },
                { value: "11", label: "environments, NVIDIA and real NuRec captures" },
                { value: "1500", label: "iterations in the Apollo walking run" },
                { value: "0.14", label: "m/s velocity error, pass level 0.30" },
            ],
            gallery: [
                { image: phyDashboard, size: "wide", caption: "Dashboard: Apptronik Apollo learning to walk." },
                { image: phyReplay, size: "wide", caption: "Results: interactive 3D replay of the trained policy." },
                { image: phyAnymal, caption: "Robot library: ANYmal D in 3D." },
                { image: phyEnvironment, caption: "An NVIDIA warehouse, real look." },
                { image: phySystem, caption: "System page: the Spark's health." },
                { image: phyCard, caption: "The console package, published as the Isaac Lab card on Build-NTCAI." },
            ],
        },
    },
    {
        id: 21,
        image: wisIllustrate,
        title: "AI| Wistudi - XP Video Agent & Flow AI",
        category: ['AI', 'web', 'application'],
        description: "Two AI assistants inside the Wistudi lesson builder. The XP Video agent watches an educational video and proposes timestamped interactive checkpoints through a guided conversation. The Flow assistant turns a PDF textbook, a scanned worksheet or a plain idea into a complete interactive lesson, illustrated in the book's own style.",
        techstack: "TypeScript, Fastify, Gemini, Gemini Files API, Zod, OCR.space, Pollinations, NDJSON streaming, Docker",
        overview: {
            tagline: "Turn a video or a textbook into an interactive lesson. The model proposes; code decides what is allowed.",
            role: "AI Engineer: designed and built the AI service end to end",
            year: "2026",
            // Blocks that fly in and snap into a lesson in the hero; content taken from the recordings.
            assembly: {
                video: { image: wisPlayer, title: "ANTISOCIAL?!", duration: "3:29", pins: [{ at: 0.18, label: "0:38" }, { at: 0.36, label: "1:15" }, { at: 0.77, label: "2:41" }] },
                blocks: [
                    { kind: "Multiple choice", tone: "orange", text: "How is an asocial individual best defined?", options: ["Someone who doesn't like to socialise", "Someone who violates the rights of others"] },
                    { kind: "True / False", tone: "blue", text: "Antisocial means not wanting to be around people." },
                    { kind: "Image", tone: "violet", image: wisArt, text: "Drawn in the book's own style" },
                    { kind: "Link & Match", tone: "green", pairs: ["Childhood abuse", "Risk factor"] },
                ],
            },
            problem: "Teachers already own great material: YouTube lessons, PDF textbooks, scanned worksheets. Turning it into interactive activities means rewatching, transcribing and building every block by hand, which takes hours per lesson.",
            idea: "One standalone TypeScript service owns every model call. The main API authenticates and relays; the browser never talks to a model. Each stage has its own schema, prompt and validator, and the creator approves the result before the next stage spends tokens.",
            flows: [
                {
                    name: "XP Video agent",
                    tone: "orange",
                    clip: wisXpClip,
                    poster: wisStudio,
                    clipCaption: "Recorded session at 3× speed: the agent analyses a Psych2Go video and pins checkpoints to its timeline.",
                    summary: "Analyses an educational video and recommends timestamped checkpoints, each one tied to evidence in the video.",
                    steps: [
                        { title: "Ingest", image: wisPlayer, text: "The video is uploaded to the Gemini Files API and polled until active; YouTube links are passed straight through." },
                        { title: "Analyse", image: wisAnalysis, text: "One analysis prompt returns evidence items with timestamps, clamped to the video's real duration: audience, goals and key topics." },
                        { title: "Interview", image: wisAnalysis, text: "Guided questions (goal, audience, depth) or free chat and voice. An interpreter turns each turn into one of 13 intents with slots." },
                        { title: "Recommend", image: wisCheckpoint, text: "A tool registry (analyse video, update workspace, generate suggestions, check goal alignment) proposes checkpoints, each with a \"Why this?\" citing its evidence." },
                        { title: "Refine", image: wisXpQuiz, text: "The creator focuses one checkpoint, changes goal, difficulty or item count, reviews a summary and applies. The workspace is versioned, so any checkpoint can be restored." },
                    ],
                },
                {
                    name: "Flow assistant",
                    tone: "violet",
                    clip: wisFlowClip,
                    poster: wisIllustrate,
                    clipCaption: "Recorded session at 3× speed: the assistant writes a Solar System page and draws its illustration.",
                    summary: "A staged workflow that turns source pages or an idea into pages of activity blocks, written and illustrated.",
                    steps: [
                        { title: "Read", image: wisUpload, text: "Uses the PDF text layer when it is usable; otherwise renders the page, compresses it under 1 MB and runs OCR, with a vision fallback that keeps reading order and option letters." },
                        { title: "Understand & consult", image: wisSettings, text: "A preference gate settles goal, lesson language, audience or CEFR level, then count. A settled field is never asked again." },
                        { title: "Outline", image: wisOutline, text: "Pages and suggested activity blocks, each with a reason, from a block catalog generated out of the builder's registry." },
                        { title: "Write", image: wisComplete, text: "Six writers run in parallel and stream NDJSON progress. A failing group is retried without the bad block, then split, so the page still ships." },
                        { title: "Illustrate", image: wisImageGen, text: "Pictures drawn in the source book's style: a cheap provider first, Gemini with reference images as fallback, and a vision call to place labels." },
                    ],
                },
            ],
            highlights: [
                { title: "Model output is untrusted input", text: "Tolerant JSON parsing, a zod schema, then a business validator that names the exact problem. The model gets its own output plus that reason and fixes only that." },
                { title: "Grounded and closed-world", text: "Every block must cite the source pages it came from; every checkpoint must reference video evidence. Media URLs the model did not receive are rejected as invented." },
                { title: "Resilient on a free tier", text: "Model chain with backoff, a quota-aware API key pool, a client-side requests-per-minute limiter and a deadline passed down every call." },
                { title: "Cost by design", text: "Browser speech recognition for dictation, the cheap image provider first, cached OCR and a fully offline test suite." },
            ],
            facts: [
                { value: "~17.5k", label: "lines of TypeScript in the AI service" },
                { value: "23", label: "flow and video-agent endpoints" },
                { value: "47", label: "test files that run without API spend" },
                { value: "6", label: "page writers in parallel" },
                { value: "13", label: "intents the video interpreter understands" },
            ],
            // size "wide" | "tall" lays the gallery out as a bento grid.
            gallery: [
                { image: wisComplete, size: "wide", caption: "A finished nine-page mission written by Flow AI, with its own illustrations." },
                { image: wisImageGen, size: "wide", caption: "AI Image: prompts suggested from the block and lesson context, drawn and inserted into the block." },
                { image: wisArt, size: "wide", caption: "Flow AI illustrates a page in the source book's style." },
                { image: wisCheckpoint, size: "tall", caption: "XP Video checkpoints, each with a \"Why this?\"." },
                { image: wisXpOptions, caption: "A generated checkpoint question." },
                { image: wisAgenda, caption: "A generated agenda illustration." },
                { image: wisFlowChat, size: "tall", caption: "The Flow assistant proposes the next block and asks first." },
                { image: wisFlowQuiz, size: "wide", caption: "A quiz written from the workshop's own pages." },
                { image: wisOutline, caption: "Four pages outlined from an 18-page PDF." },
            ],
        },
    },
    {
        id: 20,
        image: Work10,
        title: "AI| Bachelor Thesis: Reliable Answer Generation for Medical VQA",
        category: ['AI', 'University'],
        description: "Fine-tuned MLLMs and a diffusion-based VLM for Medical Visual Question Answering, proposing a Causal-Bidirectional Block Diffusion method. Built a Gradio demo with NeMo Guardrails. Under review for EAAI (Q1 journal).",
        techstack: "PyTorch, Hugging Face, LoRA, Gradio, NeMo Guardrails, CLIP"
    },
    {
        id: 19,
        image: AisessImg,
        title: "AI| Aisess - HR Talent Screening Agent",
        category: ['AI', 'web', 'application'],
        github: "https://github.com/SharkTien/GDGoC---Aisess",
        description: "An AI-powered professional interview system featuring context-aware mock interviews, smart talent screening agent, and 6D competency scoring with interactive radar charts for personalized career feedback.",
        techstack: "FastAPI, Next.js, OpenAI, SQLModel"
    },

    {
        id: 18,
        image: iucnImg,
        title: "CS313 - Data Mining and Applications",
        category: ['data', 'University', 'AI'],
        link: reportPdf,
        github: "https://github.com/temneidh/iucn-species-prediction",
        description: "A data mining project focused on predicting species status using various machine learning techniques, developed as part of the CS313 course.",
        techstack: "Python, Machine Learning, Data Mining"
    },
    {
        id: 17,
        image: cyclisticImg,
        title: 'Data Analysis | Case Study Cyclistic',
        category: ['data'],
        link: cyclisticPdf,
        description: 'This case study analyzes 12 months of Cyclistic bike-share data to uncover behavioral differences between casual riders and annual members. Using Python and visualization tools, I explored ride volume, duration patterns, weekday vs. weekend behavior, seasonality, and rideable-type preferences. The findings reveal that casual riders behave like leisure users — riding longer and favoring weekends and warm months — while members show consistent weekday commuting patterns. Based on these insights, I developed three strategic recommendations focused on targeted weekend marketing, value-based messaging for long-duration riders, and seasonal membership campaigns. This project demonstrates my ability to work with large datasets, create compelling visualizations, and translate analysis into actionable business decisions.',
        techstack: 'Python, Google BigQuery, SQL'
    },
    {
        id: 16,
        image: Work16,
        title: 'AIESEC| AIV Dashboard',
        category: ['Web', 'application', 'data'],
        link: dashboardPdf,
        github: "https://github.com/SharkTien/aiv-dashboard",
        description: 'A detailed data dashboard for AIESEC developed to provide interactive visualization and analytics for organizational insights.',
        techstack: 'NextJs, SQL, Linux, PM2, Git Actions, DNS Management, SSL, Nginx, Webflow'
    },
    {
        id: 15,
        image: Work15,
        title: 'AI| [Gucci] Case Study - "AI Co-Worker" Engine',
        category: ['AI', 'application'],
        link: "https://drive.google.com/file/d/1VPJe8g4mL97RAQWYscbWydDrpu1lSd6N/view?usp=sharing",
        github: "https://github.com/SharkTien/AI-CoWorker-Engine",
        description: 'An innovative AI Co-Worker Engine developed as a case study for Gucci, leveraging generative AI to streamline workflows.',
        techstack: 'Python, FastAPI, Docker, Milvus'
    },
    {
        id: 10,
        image: Work10,
        title: 'ROOMELSA | AI Challenge',
        category: ['AI'],
        github: 'https://github.com/SharkTien/ROOM_ELSA_BUCCI_GANG',
        description: 'A machine learning solution developed during the ROOMELSA AI Challenge to solve complex data interpretation problems.',
        techstack: 'Python, Faiss, InternVL, CLIP, PyTorch'
    },
    {
        id: 3,
        image: Work3,
        title: 'AI| Adaptive Multimodal Video Retrieval System',
        category: ['AI', 'web', 'application'],
        link: "https://github.com/SharkTien/Adaptive-Multimodal-Video-Retrieval-System",
        description: 'An advanced Multimedia Search Engine utilizing Vision-Language Models and Milvus vector database for real-time semantic video retrieval.',
        techstack: 'FastAPI, CLIP, Milvus, OCR, ASR, Docker, Nginx'
    },
    {
        id: 6,
        image: Work6,
        title: 'AI| Signboard detection using YOLO11x.',
        category: ['AI'],
        link: report,
        description: 'A computer vision project that applies the advanced YOLO11x model for accurate signboard detection and localization.',
        techstack: 'Python, YOLO, Augmentation'
    },
    {
        id: 2,
        image: Work1,
        title: 'Spotengfy - Music player - 2023',
        category: ['web'],
        link: "https://sharktien.github.io/spotengfy/",
        github: "https://github.com/SharkTien/spotengfy",
        description: 'This is my first page, a music player web application designed to provide users with a seamless audio streaming experience, featuring playlist management and modern UI.',
        techstack: 'Javascript'
    },
    {
        id: 11,
        image: Work11,
        title: 'SE104 Project | CUE Billiard',
        category: ['web', 'application', 'University'],
        link: 'https://github.com/SharkTien/CUE-PMS',
        description: 'A comprehensive billiard pool management web application created for a university project, featuring booking and resource tracking.',
        techstack: 'SQL, PHP'
    },
    {
        id: 4,
        image: Work4,
        title: 'Freelancer| Loptamlyhoc',
        category: ['web', 'design'],
        link: "https://loptamlyhoc.com/",
        description: 'A responsive and elegantly designed website for Loptamlyhoc, tailored to provide psychological counseling information.',
        techstack: 'PHP, SQL, Wordpress'
    },
    {
        id: 5,
        image: Work5,
        title: 'Freelancer| Navis Danang',
        category: ['web', 'design'],
        link: "https://www.navisdanang.com/",
        description: 'A professional business website for Navis Danang, showcasing their services with a modern layout and optimal user experience.',
        techstack: 'Wix'
    },
    {
        id: 7,
        image: Work7,
        title: 'Freelancer | BabooHouse.',
        category: ['web'],
        link: 'https://baboohouse.com.vn/',
        description: 'A clean and optimized commercial website developed for BabooHouse to strengthen their online presence and reach.',
        techstack: 'PHP, SQL'
    },
    {
        id: 8,
        image: Work8,
        title: 'Freelancer | Leximco.',
        category: ['web'],
        link: 'https://leximco.co.jp/',
        description: 'A corporate website for Leximco featuring an intuitive design, cross-browser compatibility, and a professional aesthetic.',
        techstack: 'PHP, SQL'
    },
    {
        id: 9,
        image: Work9,
        title: 'Freelancer | Ttcenter.',
        category: ['web'],
        link: 'https://ttcenter.com.vn/',
        description: 'A scalable and responsive web platform built for Ttcenter, focusing on performance and user engagement.',
        techstack: 'SQL, Laravel'
    },
    {
        id: 12,
        image: Work12,
        title: 'Freelancer | Utopia',
        category: ['web', 'design'],
        link: 'https://utopia.com.vn/',
        description: 'A creative and vibrant website for Utopia, emphasizing aesthetic UI/UX design and interactive user elements.',
        techstack: 'Wordpress'
    },
    {
        id: 13,
        image: Work13,
        title: 'Freelancer | Center2',
        category: ['web', 'design'],
        link: 'https://center2.tgndigital.xyz/',
        description: 'An elegant digital presence designed and developed for Center2, providing a bespoke user experience.',
        techstack: 'Wordpress'
    },
    {
        id: 14,
        image: Work14,
        title: 'Freelancer | AuraVibe',
        category: ['web', 'design'],
        link: 'https://www.auravibe.org/',
        description: 'A modern, dynamic website for AuraVibe that blends creative web design with seamless browsing functionality.',
        techstack: 'Wix'
    },
    {
        id: 1,
        image: Work2,
        title: 'Astraea - 2021',
        category: ['application'],
        link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsharktien.github.io%2Fprofile%2Fstatic%2Fmedia%2Fastraea%25C2%25A9sharktien.6812a191754b482ea7a8.docx&wdOrigin=BROWSELINK",
        github: "https://github.com/hoangm960/Astraea",
        description: 'A desktop application project focused on delivering core functionalities with a robust and user-friendly interface.',
        techstack: 'Python, SQL'
    }
];

export const projectsNav = [
    { name: 'all' },
    { name: 'AI' },
    { name: 'data' },
    { name: 'web' },
    { name: 'design' },
    { name: 'application' },
    { name: 'University' },
]

export const slugify = (text) =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

export const getProjectSlug = (project) => `${project.id}-${slugify(project.title)}`;

// Display title without the "AI|" / "Freelancer |" prefix, which becomes a label instead.
export const splitProjectTitle = (title) => {
    const [label, ...rest] = title.split("|");
    return rest.length ? { label: label.trim(), name: rest.join("|").trim() } : { label: "", name: title.trim() };
};
