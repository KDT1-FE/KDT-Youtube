import React from 'react';
import BasicItem from './BasicItem';

type Props = {};

const index = (props: Props) => {
  return (
    <div id="contentContainer">
      <div id="wrapper">
        <div id="inner-content">
          <BasicItem></BasicItem>
          {/* <section>
            <div id="items"></div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default index;
