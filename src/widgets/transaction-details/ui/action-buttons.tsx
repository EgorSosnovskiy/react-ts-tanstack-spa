import { Button } from '@/shared/ui/button';

interface ActionButtonsProps {
  onApprove?(): void;

  onDecline?(): void;

  onAnalyze?(): void;
}

export function ActionButtons({
  onApprove,
  onDecline,
  onAnalyze,
}: ActionButtonsProps) {
  return (
    <section className="mt-1 rounded-xs border border-[#E3E3E3] bg-white px-6 py-2 shadow-sm">
      <div className="grid grid-cols-3 gap-5">
        <Button
          onClick={onApprove}
          className="h-9 rounded-xs bg-[#4CAF50] text-[16px] font-medium text-white hover:bg-[#43A047]"
        >
          Approve
        </Button>

        <Button
          onClick={onDecline}
          className="h-9 rounded-xs bg-[#EF5A4E] text-[16px] font-medium text-white hover:bg-[#E64A3C]"
        >
          Decline
        </Button>

        <Button
          variant="outline"
          onClick={onAnalyze}
          className="h-9 rounded-xs border-[#D8D8D8] bg-white text-[16px] font-medium text-[#3E73D8] hover:bg-slate-50 hover:text-[#3E73D8]"
        >
          Analyze
        </Button>
      </div>
    </section>
  );
}
