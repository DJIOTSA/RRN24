function Students(props) {
  const { matricule, name } = props;
  return (
    <div className="student">
      <p>{name}</p>
      <p>{matricule}</p>
    </div>
  );
}

export default Students;
