import {useEffect, useState} from "react";

export const Pagination = ({pagination, previoustPage, nextPage, toPage}) => {
  const {current_page, last_page} = pagination

  const [listPages, setListPages] = useState([]);
  const [offset] = useState(1);

  const listPagesNumber = () => {
    let from = current_page - offset;
    if (from < 1) {
      from = 1;
    }

    let to = from + (offset * 2);
    if (to >= last_page) {
      to = last_page;
    }

    let pagesArray = [];
    while (from <= to) {
      pagesArray.push(from);
      from++;
    }
    setListPages(pagesArray);
  }

  useEffect(() => {
    listPagesNumber()
  }, [pagination])

  return (
    <>
      <div className="h-2"/>
      <div className="d-flex justify-content-between px-2">
        <nav aria-label="navigation">
          <ul className="pagination pagination">
            <li className={`page-item ${current_page === 1 ? 'disabled' : ''}`}>
              <a className="page-link" href="#" onClick={(event) => {
                event.preventDefault()
                previoustPage()
              }}>{"<<"}</a>
            </li>
            {
              listPages.map(page => (
                <li className={`page-item ${current_page === page ? 'active' : ''}`} key={page}>
                  <a className="page-link" href="#" onClick={(event) => {
                    event.preventDefault()
                    toPage(page)
                  }}>{page}</a>
                </li>
              ))
            }
            <li className={`page-item ${current_page === last_page ? 'disabled' : ''}`}>
              <a className="page-link" href="#" onClick={(event) => {
                event.preventDefault()
                nextPage()
              }}>{">>"}</a>
            </li>
          </ul>
        </nav>

        <nav aria-label="navigation">
          <ul className="pagination pagination-sm">
            <li className="page-item p-1">
              Page:
            </li>
            <li className="page-item me-1 p-1">
              <strong>
                {current_page} of{' '}{last_page}
              </strong>
            </li>
            <li className="page-item p-1">
              Total:
            </li>
            <li className="page-item me-1 p-1">
              <strong>
                {pagination.total}
              </strong>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};