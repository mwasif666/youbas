import ContentPage from "@/components/ContentPage";
import { termsContent } from "@/data/contentPages";

export default function TermsConditionsPage() {
  return (
    <ContentPage
      title={termsContent.title}
      breadcrumbLabel={termsContent.breadcrumbLabel}
      intro={termsContent.intro}
      sections={termsContent.sections}
    />
  );
}
