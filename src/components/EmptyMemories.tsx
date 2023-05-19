export function EmptyMemories() {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <a className="underline hover:text-gray-50" href="">
          criar agora
        </a>
        !
      </p>
    </div>
  );
}
