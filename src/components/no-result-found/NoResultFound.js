import { Button, Empty } from 'antd';

const NoResultFound = ({ setCloseNoResult }) => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ height: 60 }}
      description={<span>No contact was found. Try something else</span>}
    >
      <Button type="primary" onClick={() => setCloseNoResult(false)}>
        Ok
      </Button>
    </Empty>
  );
};
export default NoResultFound;
