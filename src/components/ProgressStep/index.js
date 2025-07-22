import React, { useState, useEffect } from "react";
import {
  ProgressContainer,
  StepCard,
  StepHeader,
  StepNumber,
  StepTitle,
  StepContent,
  StepActions,
  CompleteButton,
  NextButton,
  ResetButton,
  ProgressBar,
  ProgressFill,
  HeaderActions,
  ConfirmModal,
  ModalOverlay,
  ModalContent,
  ModalButtons,
  ConfirmButton,
  CancelButton,
} from "./styles";

export const ProgressStep = ({
  steps,
  pageId,
  title = "Lista de verificación",
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [allCompleted, setAllCompleted] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  // Cargar progreso desde localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress-${pageId}`);
    if (savedProgress) {
      try {
        const { completed, current } = JSON.parse(savedProgress);
        setCompletedSteps(new Set(completed));
        setCurrentStep(current);
        setAllCompleted(completed.length === steps.length);
      } catch (error) {
        console.error("Error cargando progreso:", error);
      }
    }
  }, [pageId, steps.length]);

  // Scroll automático al cambiar de paso
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Pequeño delay para que el contenido se renderice
    const timer = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  // Guardar progreso en localStorage
  const saveProgress = (completed, current) => {
    localStorage.setItem(
      `progress-${pageId}`,
      JSON.stringify({
        completed: Array.from(completed),
        current: current,
        timestamp: Date.now(),
      })
    );
  };

  // Marcar paso como completado
  const completeStep = (stepIndex) => {
    const newCompleted = new Set(completedSteps);
    newCompleted.add(stepIndex);
    setCompletedSteps(newCompleted);

    // 🎯 Plausible Event: Paso completado
    if (window.plausible) {
      window.plausible("Paso Completado", {
        props: {
          procedimiento: pageId,
          paso: stepIndex + 1,
          total_pasos: steps.length,
        },
      });
    }

    if (newCompleted.size === steps.length) {
      setAllCompleted(true);

      // 🎯 Plausible Event: Procedimiento completado
      if (window.plausible) {
        window.plausible("Procedimiento Completado", {
          props: { procedimiento: pageId },
        });
      }
    }

    saveProgress(newCompleted, currentStep);
  };

  // Ir al siguiente paso
  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      saveProgress(completedSteps, nextStep);
    }
  };

  // Mostrar confirmación de reinicio
  const handleResetClick = () => {
    setShowConfirmReset(true);
  };

  // Confirmar reinicio
  const confirmReset = () => {
    // 🎯 Plausible Event: Proceso reiniciado
    if (window.plausible) {
      window.plausible("Proceso Reiniciado", {
        props: {
          procedimiento: pageId,
          progreso_previo: completedSteps.size,
        },
      });
    }

    setCompletedSteps(new Set());
    setCurrentStep(0);
    setAllCompleted(false);
    localStorage.removeItem(`progress-${pageId}`);
    setShowConfirmReset(false);

    // Scroll al inicio
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Cancelar reinicio
  const cancelReset = () => {
    setShowConfirmReset(false);
  };

  const progressPercentage = (completedSteps.size / steps.length) * 100;

  return (
    <ProgressContainer>
      <StepHeader>
        <div>
          <StepTitle>{title}</StepTitle>
          <ProgressBar>
            <ProgressFill percentage={progressPercentage} />
          </ProgressBar>
          <div>
            {completedSteps.size} de {steps.length} pasos completados (
            {Math.round(progressPercentage)}%)
          </div>
        </div>

        {/* Botón reiniciar solo si hay progreso */}
        {(completedSteps.size > 0 || currentStep > 0) && (
          <HeaderActions>
            <ResetButton
              onClick={handleResetClick}
              aria-label="Reiniciar el proceso"
              title="Reiniciar proceso"
            >
              ↻
            </ResetButton>
          </HeaderActions>
        )}
      </StepHeader>

      {/* Mostrar solo el paso actual */}
      {!allCompleted && (
        <StepCard isActive={true} isCompleted={false} isFullScreen={true}>
          <StepNumber isCompleted={false} isActive={true}>
            {currentStep + 1}
          </StepNumber>

          <StepContent>
            <h3>{steps[currentStep].title}</h3>
            <p>{steps[currentStep].description}</p>
            {steps[currentStep].content && (
              <div>{steps[currentStep].content}</div>
            )}
          </StepContent>
        </StepCard>
      )}

      {/* Mostrar mensaje de completado */}
      {allCompleted && (
        <StepCard isCompleted={true} isFullScreen={true}>
          <StepContent>
            <h3>🎉 ¡Proceso completado!</h3>
            <p>Has completado todos los pasos del aseo general exitosamente.</p>
            <p>Tu progreso se ha guardado automáticamente.</p>
          </StepContent>
        </StepCard>
      )}

      {/* Resumen de pasos completados (opcional, colapsado) */}
      {completedSteps.size > 0 && !allCompleted && (
        <details
          style={{
            marginTop: "var(--spacing-md)",
            opacity: 0.7,
            padding: "0 var(--spacing-lg)",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              padding: "var(--spacing-sm)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-secondary)",
            }}
          >
            📋 Ver pasos completados ({completedSteps.size})
          </summary>
          {Array.from(completedSteps)
            .sort((a, b) => a - b)
            .map((stepIndex) => (
              <div
                key={stepIndex}
                style={{
                  padding: "var(--spacing-xs)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-secondary)",
                }}
              >
                ✅ {stepIndex + 1}. {steps[stepIndex].title}
              </div>
            ))}
        </details>
      )}

      {/* Botón fijo con lógica correcta */}
      <StepActions>
        {!allCompleted && !completedSteps.has(currentStep) && (
          <CompleteButton
            onClick={() => completeStep(currentStep)}
            aria-label={`Marcar como completado: ${
              steps[currentStep] ? steps[currentStep].title : "paso actual"
            }`}
          >
            ✓ Completar paso
          </CompleteButton>
        )}

        {!allCompleted &&
          completedSteps.has(currentStep) &&
          currentStep < steps.length - 1 && (
            <NextButton
              onClick={goToNextStep}
              aria-label="Ir al siguiente paso"
            >
              Siguiente paso →
            </NextButton>
          )}

        {allCompleted && (
          <CompleteButton
            onClick={handleResetClick}
            aria-label="Reiniciar el proceso para comenzar de nuevo"
            style={{
              background: "linear-gradient(135deg, #64748b, #475569)",
              color: "white",
            }}
          >
            🔄 Empezar de nuevo
          </CompleteButton>
        )}
      </StepActions>

      {/* Modal de confirmación */}
      {showConfirmReset && (
        <ModalOverlay onClick={cancelReset}>
          <ConfirmModal onClick={(e) => e.stopPropagation()}>
            <ModalContent>
              <h3>⚠️ Confirmar reinicio</h3>
              <p>¿Estás seguro de que quieres reiniciar el proceso?</p>
              <p>
                <strong>Se perderá todo el progreso actual.</strong>
              </p>
            </ModalContent>
            <ModalButtons>
              <CancelButton onClick={cancelReset}>Cancelar</CancelButton>
              <ConfirmButton onClick={confirmReset}>
                Sí, reiniciar
              </ConfirmButton>
            </ModalButtons>
          </ConfirmModal>
        </ModalOverlay>
      )}
    </ProgressContainer>
  );
};
