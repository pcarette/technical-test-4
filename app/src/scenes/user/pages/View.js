import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../../components/loader";
import api from "../../../services/api";
import Detail from "../components/Detail";

const View = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await api.get(`/user/${id}`);
      setUser(response.data);
    })();
  }, []);

  if (!user) return <Loader />;

  return (
    <div>
      <div className="appContainer pt-24">
        <Detail user={user} />
      </div>
    </div>
  );
};

export default View;