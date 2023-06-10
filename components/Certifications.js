import React, { useState } from 'react';

const Certifications = () => {
  const [certificates, setCertificates] = useState([]);
  const [newCertificate, setNewCertificate] = useState({
    title: '',
    date: '',
  });

  const addCertificate = () => {
    if (newCertificate.title.trim() !== '' && newCertificate.date.trim() !== '') {
      setCertificates([...certificates, newCertificate]);
      setNewCertificate({
        title: '',
        date: '',
      });
    }
  };

  const removeCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  const handleCertificateChange = (e, index) => {
    const { name, value } = e.target;
    setCertificates((prevCertificates) =>
      prevCertificates.map((cert, i) => (i === index ? { ...cert, [name]: value } : cert))
    );
  };

  const handleNewCertificateChange = (e) => {
    const { name, value } = e.target;
    setNewCertificate((prevCertificate) => ({ ...prevCertificate, [name]: value }));
  };

  const handleMoveCertificateUp = (index) => {
    if (index > 0) {
      const updatedCertificates = [...certificates];
      const currentCertificate = updatedCertificates[index];
      updatedCertificates[index] = updatedCertificates[index - 1];
      updatedCertificates[index - 1] = currentCertificate;
      setCertificates(updatedCertificates);
    }
  };

  const handleMoveCertificateDown = (index) => {
    if (index < certificates.length - 1) {
      const updatedCertificates = [...certificates];
      const currentCertificate = updatedCertificates[index];
      updatedCertificates[index] = updatedCertificates[index + 1];
      updatedCertificates[index + 1] = currentCertificate;
      setCertificates(updatedCertificates);
    }
  };

  return (
    <div>
      <h2>Certifications</h2>
      <div>
        <input
          type="text"
          name="title"
          value={newCertificate.title}
          onChange={handleNewCertificateChange}
          placeholder="Title"
        />
        <input
          type="month"
          name="date"
          value={newCertificate.date}
          onChange={handleNewCertificateChange}
          placeholder="Date"
        />
        <button onClick={addCertificate}>Add Certificate</button>
      </div>
      {certificates.map((certificate, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            value={certificate.title}
            onChange={(e) => handleCertificateChange(e, index)}
            placeholder="Title"
          />
          <input
            type="month"
            name="date"
            value={certificate.date}
            onChange={(e) => handleCertificateChange(e, index)}
            placeholder="Date"
          />
          <button onClick={() => removeCertificate(index)}>Remove Certificate</button>
          <button onClick={() => handleMoveCertificateUp(index)}>Move Up</button>
          <button onClick={() => handleMoveCertificateDown(index)}>Move Down</button>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
