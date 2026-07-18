import Orb from "./Orb";
import OrbitRing from "./OrbitRing";
import Particles from "./Particles";

function AICore() {
  return (
    <div className="relative flex h-[520px] w-[520px] items-center justify-center">

      <Particles />

      <OrbitRing size={470} />

      <OrbitRing size={360} />

      <Orb />

    </div>
  );
}

export default AICore;