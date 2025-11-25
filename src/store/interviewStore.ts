import { create } from "zustand";

interface Message {
  role: "user" | "assistant";
  content: string;
  threadId: string;
}

interface QaPair {
  question: string;
  answer: string;
}
interface FinalEvaluation {
  overall_quality?: string;
  strengths: string[];
  areas_for_improvement: string[];
  recommendation?: string;
  final_feedback?: string;
}

interface InterviewState {
  interviewStarted: boolean;
  messages: Message[];
  threadId?: string;
  showReport: boolean;
  finalReport: string;
  candidateName: string;
  jobTitle: string;
  cvFilename?: string;
  questionStyle: string;
  qaPairs: QaPair[];
  maxSteps: number;
  currentStep: number;
  mode:string

  feedbackList: any[]; 
  finalEvaluation: FinalEvaluation; 

  setInterviewStarted: (val: boolean) => void;
  setThreadId: (id: string) => void;
  setMaxSteps: (steps: number) => void;
  setMode : (val:string) => void;
  setCurrentStep: (step: number) => void;
  incrementStep: () => void;
  addMessage: (msg: Message) => void;
  addQaPair: (pair: QaPair) => void;
  setFeedbackList: (fb: any[]) => void;
  setFinalEvaluation: (fe: any) => void;
  reset: () => void;
}

export const useInterviewStore = create<InterviewState>((set) => ({
  interviewStarted: false,
  messages: [],
  threadId: undefined,
  showReport: false,
  finalReport: "",
  candidateName: "",
  jobTitle: "",
  cvFilename: "",
  questionStyle: "",
  qaPairs: [],
  mode: "chat",

  feedbackList: [],          // ✅ FIXED
finalEvaluation: {
  overall_quality: undefined,
  strengths: [],
  areas_for_improvement: [],
  recommendation: "",
  final_feedback: "",
},

  maxSteps: 3,
  currentStep: 1,

  setInterviewStarted: (val) => set({ interviewStarted: val }),
  setThreadId: (id) => set({ threadId: id }),
  setMaxSteps: (steps) => set({ maxSteps: steps }),
  setCurrentStep: (step) => set({ currentStep: step }),
  setMode : (val) => set({mode:val}),
  incrementStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.maxSteps),
    })),

  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),

  addQaPair: (pair) =>
    set((state) => ({ qaPairs: [...state.qaPairs, pair] })),

  setFeedbackList: (fb) => set({ feedbackList: fb }),
  setFinalEvaluation: (fe) => set({ finalEvaluation: fe }),

  reset: () =>
    set({
      interviewStarted: false,
      messages: [],
      threadId: undefined,
      showReport: false,
      finalReport: "",
      candidateName: "",
      jobTitle: "",
      cvFilename: "",
      questionStyle: "",
      qaPairs: [],
      feedbackList: [],      
finalEvaluation: {
  overall_quality: undefined,
  strengths: [],
  areas_for_improvement: [],
  recommendation: "",
  final_feedback: "",
},

      maxSteps: 3,
      currentStep: 1,
    }),
}));
