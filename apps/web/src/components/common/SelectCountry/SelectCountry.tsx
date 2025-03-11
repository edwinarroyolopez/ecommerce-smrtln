import { useCountries } from "@/hooks/useCountries";
import styles from "./SelectCountry.module.css";

interface SelectCountryProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange, error }) => {
  const { data: countries, isLoading, error: fetchError } = useCountries();

  if (isLoading) return <div>Cargando países...</div>;
  if (fetchError) return <div>Error al cargar los países</div>;

  return (
    <div className={styles.inputGroup}>
      <label className={styles.labelCountry} htmlFor="country">País</label>
      <select id="country" name="country" value={value} onChange={onChange} className={styles.select}>
        <option value="">Selecciona un país</option>
        {countries?.map((country: any) => (
          <option key={country.cca2} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default SelectCountry;
