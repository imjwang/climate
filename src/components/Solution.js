import { Typography, Sheet, Stack } from "@mui/joy"
import TripleIconDup from "@/components/TripleIconDuplicate"

const Solution = () => {
  return (
    <Sheet variant="outlined" color="neutral" sx={{px: 14, py: 10, height: "300vh"}}>
      <Stack spacing={2}>
    <Typography color="primary" level="display2">
      solution
    </Typography>
    <TripleIconDup />
    <Typography level="h1">
      Reframe
    </Typography>
    <Typography level="h4">
      First, think of food as fuel. If we want to perserve the planet, we should go green in food as we are doing in electricity. <br/>
      Now, imagine that a recipe is like code. Only it runs on the operating system that is your tongue. 
      Your preferences may change through time, or depend on how your day is going, but you have an underlying preference type.
      <br/>
      Your friends and family probably know your tastes to some extent. But with recent advances in Artificial Intelligence, could it be possible
      to train a recommendation engine that knows you better than your friends and family?
      <br/>
      Is it really that far-fetched? Your Netflix algorithm doesn't know how to laugh, but is great at recommending you shows to binge.
      Your Spotify algorithm doesn't know how to love, but it knows how to work your circuits through autoplay.
    </Typography>
    <Typography level="h1">
      The Platform
    </Typography>
    <Typography level="h4">
      If we're going to build a recommendation engine, we first have to create a data platform that enables content creation.
      <br/>
      We also need an account system to keep track of your preferences.
      <br/>
      And of course, we have to standardize what constitutes a recipe...
      <br/>
      <br/>
      ...But enough said, let's get cooking!
    </Typography>
      </Stack>
  </Sheet>
  )
}
export default Solution