
export const useFormControl = (watch = false, settings = defaultSettings) => {
  const [FormControl, setFormControl] = useState({});
  const [error, setError] = useState(null);

  const onChange = () => {
    setFormControl({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      timestamp,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

}