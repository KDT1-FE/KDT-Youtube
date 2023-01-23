import { createContext, useState } from 'react';

// Context 생성
export const ShowContext = createContext<any>(false);

const ShowcontextProvider = (props: any) => {
  // props 보낼 state
  const [shownav, setShownav] = useState<boolean>(false);

  return <ShowContext.Provider value={[shownav, setShownav]} {...props} />;
};

export default ShowcontextProvider;
