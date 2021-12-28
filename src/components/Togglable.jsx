import React, { useImperativeHandle, useState } from 'react';
import {
  SearchOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons/lib/icons';

const Togglable = React.forwardRef(({ children }, ref) => {
  const [show, setShow] = useState(true);

  const styles = {
    showWhenFormShow: {
      display: show ? '' : 'none',
    },
    hideWhenFormShow: {
      display: show ? 'none' : '',
    },
  };

  const handleVisibilityChange = () => setShow(!show);

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility: handleVisibilityChange,
    };
  });

  return (
    <div>
      <div style={styles.showWhenFormShow}>
        <p
          style={{
            fontSize: 30,
            textAlign: 'center',
          }}
        >
          <CloseCircleOutlined onClick={handleVisibilityChange} />
        </p>
        {children}
      </div>
      <div style={styles.hideWhenFormShow}>
        <p
          style={{
            fontSize: 30,
            textAlign: 'center',
          }}
        >
          <SearchOutlined onClick={handleVisibilityChange} />
        </p>
      </div>
    </div>
  );
});

export default Togglable;
