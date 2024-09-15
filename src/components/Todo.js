
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../components/Todo.css';
import { BsJournalPlus } from 'react-icons/bs';

const getlocaldata = () => {
  const newlist = localStorage.getItem("access");
  return newlist ? JSON.parse(newlist) : [];
}

function Todo() {
  const [data, setdata] = useState('');
  const [items, setitems] = useState(getlocaldata());
  const [toggledIndex, setToggledIndex] = useState(null);

  const additem = () => {
    if (data.trim() !== "") {
      setitems([...items, data]);
      setdata('');
    } else {
      alert("Please provide a task.");
    }
  }

  const removeitems = (id) => {
    const updateditems = items.filter((_, index) => index !== id);
    setitems(updateditems);
  }

  const toggleClass = (index) => {
    setToggledIndex(index === toggledIndex ? null : index);
  }

  useEffect(() => {
    localStorage.setItem("access", JSON.stringify(items));
  }, [items]);

  return (
    <Container fluid className='some'>
      <Row className='justify-content-center'>
        <Col lg={5} xs={11} md={8} className='box text-center rounded my-5'>
          <div className='mydiv p-3'>
            <div className='heading'>
              <h3>TODO</h3>
            </div>
            <div className='d-flex align-items-center'>
              <input
                type="text"
                value={data}
                onKeyDown={(e) => { if (e.code === "Enter") additem(); }}
                onChange={(e) => setdata(e.target.value)}
                className='w-100'
              />
              <button className="mb-2" onClick={additem}><BsJournalPlus /></button>
            </div>
            <div>
              <ul className='list-unstyled mt-4'>
                {items.map((element, index) => (
                  <li
                    key={index}
                    className={index === toggledIndex ? "run" : ""}
                    onClick={() => toggleClass(index)}
                  >
                    <span className='leftspan'>{index + 1}.</span>
                    {element}
                    <span
                      className="fa fa-trash-o rightspan"
                      onClick={() => removeitems(index)}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Todo;
