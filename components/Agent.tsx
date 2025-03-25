import Image from "next/image";
import React from "react";

enum CallStatus {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  CONNECTING = "CONNECTING",
  FINISHED = "FINISHED",
}

interface AgentProps {
  userName: string;
}

const Agent: React.FC<AgentProps> = ({ userName }) => {
  const isSpeaking = true;
  const currentCallStatus = CallStatus.INACTIVE;

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak"></span>}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user"
              width={120}
              height={120}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {currentCallStatus !== CallStatus.INACTIVE ? (
          <button>
            <span>
              {currentCallStatus === CallStatus.ACTIVE ||
              currentCallStatus === CallStatus.FINISHED
                ? "Start Call"
                : ".  .   ."}
            </span>
          </button>
        ) : (
          <button>
            <span>End Call</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
