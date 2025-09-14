// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // brand to uniquely identify
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // brand to uniquely identify
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}
