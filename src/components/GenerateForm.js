import { Card, FormControl, Textarea, FormLabel, Select, Button, Option} from "@mui/joy"
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';

const test2 = `1.Lorem ipsum dolor sit amet, 
2.consectetur adipiscing elit. ulla vitae elit libero, a pharetra au
3.gue. Nullam id dolor id ni
4.tetur ac, vestibulum a
5.icula ut id elit.a ac consect erosc sed odio dui. Donec ullamcorper nulla non metus auc
6.tetur ac, vestibulum a
7. Nulla vitae elit libero, a pharetra 
8.Morbi leo risus, port bh ultri
9.cies vehtor fringilla.augue.
10. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
11. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
12. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`

const methodTypes = ["bake", "grill", "fry", "boil", "steam"]

const GenerateForm = () => {
  return (
    <form>
  <Card>
    <FormControl>
      <FormLabel>Ingredients</FormLabel>
      <Textarea variant="outlined" color="info" minRows={16} placeholder={test2} name="instructions" required />
    </FormControl>
    <FormControl>
      <FormLabel>Method</FormLabel>
      <Select
      name="method"
      variant="outlined"
      color="info"
      type="text"
      placeholder="method"
      required
      >
        {methodTypes.map((m) => {
          return (
            <Option key={m} value={m}>
              {m}
            </Option>
          )
        })}
      </Select>
    </FormControl>
  <Button type="submit" variant="solid" color="info" endIcon={<LocalDiningOutlinedIcon />}>
    Submit
  </Button>
  </Card>
    </form>
  )
}



export default GenerateForm