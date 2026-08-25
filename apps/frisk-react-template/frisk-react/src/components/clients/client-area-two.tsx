

const client_data = [
  { id: 1, img: "/assets/img/client/client-1-1.svg" },
  { id: 2, img: "/assets/img/client/client-1-2.svg" },
  { id: 3, img: "/assets/img/client/client-1-3.svg" },
  { id: 4, img: "/assets/img/client/client-1-4.svg" },
  { id: 5, img: "/assets/img/client/client-1-5.svg" },
  { id: 6, img: "/assets/img/client/client-1-6.svg" },
];

type IProps = {
  space?:string;
}

export default function ClientAreaTwo({space='space-bottom'}:IProps) {
  return (
    <div className={`client-area-2 overflow-hidden ${space}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <ul className="client-list-wrap">
              {client_data.map((elm) => (
                <li key={elm.id}>
                  <a href="#">
                    <span className="link-effect">
                      <span className="effect-1">
                        <img
                          src={elm.img}
                          alt="img"
                        />
                      </span>
                      <span className="effect-1">
                        <img
                          src={elm.img}
                          alt="img"
                        />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}